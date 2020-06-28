/* eslint-disable prettier/prettier */
import { Repository, getRepository } from 'typeorm';
import Logger from '@main/utils/Logger';
import TaskRepositoryInterface from './TaskRepositoryInterface';
import TaskEntity from './taskEntity';
import { TaskSearchCriteria, PageResultSettings } from './taskCriteria';
import TaskPage from './taskPage';
import UnableToSaveTaskError from '../errors/unableToSaveTaskError';
import UnableToFetchTaskError from '../errors/unableToFetchTaskError';
import UnableToDeleteTaskError from '../errors/unableToDeleteTaskError';

export default class TaskRepository implements TaskRepositoryInterface {
  private repository: Repository<TaskEntity>;

  public constructor(
  ) {
    this.repository = getRepository(TaskEntity);
  }

  public async addTask(task: TaskEntity): Promise<TaskEntity> {
    try {
      return await this.repository.save(task);
    } catch (error) {
      Logger.error(error);
      throw new UnableToSaveTaskError({ error, details: task });
    }
  }

  public async updateTask(task: TaskEntity): Promise<TaskEntity> {
    try {
      const findData = await this.repository.findOneOrFail(task.taskId);
      findData.description = task.description;
      findData.status = task.status;
      findData.title = task.title;
      const savedData = await this.repository.save(findData);
      return savedData;
    } catch (error) {
      Logger.error(error);
      if (error.name === 'EntityNotFound') {
        throw new UnableToFetchTaskError({ error, details: task });
      }
      throw new UnableToSaveTaskError({ error, details: task });
    }
  }

  public async getTask(taskId: number): Promise<TaskEntity> {
    try {
      return await this.repository.findOneOrFail(taskId);
    } catch (error) {
      Logger.error(error);
      throw new UnableToFetchTaskError({ error, details: taskId });
    }
  }

  public async searchTask(taskCriteria: TaskSearchCriteria): Promise<TaskPage> {
    try {
      const [findResults, count] = await this.repository
        .createQueryBuilder()
        .where('LOWER(title) LIKE :title AND LOWER(description) LIKE :description AND status = :status', {
          title: `%${taskCriteria.title.toLowerCase()}%`,
          description: `%${taskCriteria.description.toLowerCase()}%`,
          status: taskCriteria.status,
        })
        .orderBy('updated_date', 'DESC')
        .take(taskCriteria.pageResultSettings.limit)
        .skip(taskCriteria.pageResultSettings.offset)
        .getManyAndCount();

      const taskPage: TaskPage = this.getTaskPageFromResults(
        findResults,
        count,
        taskCriteria.pageResultSettings,
      );

      return taskPage;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private getTaskPageFromResults(
    findResults: TaskEntity[],
    totalCount: number,
    pageResultSettings: PageResultSettings,
  ): TaskPage {
    const hasMorePages = pageResultSettings.limit + pageResultSettings.offset < totalCount;

    return {
      limit: pageResultSettings.limit,
      nextPageOffset: hasMorePages ? pageResultSettings.limit + pageResultSettings.offset : 0,
      hasNextPage: hasMorePages,
      tasks: findResults,
    };
  }

  public async getAllTasks(pageResultSettings: PageResultSettings): Promise<TaskPage> {
    try {
      const [findResults, count] = await this.repository
        .createQueryBuilder()
        .skip(pageResultSettings.offset)
        .take(pageResultSettings.limit)
        .orderBy('updated_date', 'DESC')
        .getManyAndCount();

      return this.getTaskPageFromResults(findResults, count, pageResultSettings);
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }

  public async deleteTask(taskId: number): Promise<boolean> {
    try {
      const findResult = await this.repository.findOneOrFail(taskId);

      await this.repository.remove(findResult);
      return true;
    } catch (error) {
      Logger.error(error);
      if (error.name === 'EntityNotFound') {
        throw new UnableToFetchTaskError({ error, details: taskId });
      }
      throw new UnableToDeleteTaskError({
        error,
        details: taskId,
      });
    }
  }
}
