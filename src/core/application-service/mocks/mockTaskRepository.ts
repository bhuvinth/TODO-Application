/* eslint-disable no-param-reassign */
import TaskEntity from '@main/core/infrastructure/database/taskEntity';
import TaskRepositoryInterface from '@main/core/infrastructure/database/TaskRepositoryInterface';
import {
  TaskSearchCriteria,
  PageResultSettings,
} from '@main/core/infrastructure/database/taskCriteria';
import UnableToFetchTaskError from '@main/core/infrastructure/errors/unableToFetchTaskError';
import TaskPage from '@main/core/infrastructure/database/taskPage';
import UnableToDeleteTaskError from '@main/core/infrastructure/errors/unableToDeleteTaskError';

export default class MockTaskRepository implements TaskRepositoryInterface {
  private tasks: TaskEntity[] = [];

  private taskIdSequence = 0;

  public async addTask(task: TaskEntity): Promise<TaskEntity> {
    this.taskIdSequence += 1;
    task.taskId = this.taskIdSequence;
    task.createdDate = new Date();
    task.updatedDate = new Date();
    this.tasks.push(task);
    return task;
  }

  public async updateTask(taskObj: TaskEntity): Promise<TaskEntity> {
    await this.getTask(taskObj.taskId);

    this.tasks.forEach((task, index) => {
      if (task.taskId === taskObj.taskId) {
        taskObj.updatedDate = new Date();
        this.tasks[index] = taskObj;
      }
    });

    return taskObj;
  }

  public async getTask(taskId: number): Promise<TaskEntity> {
    const foundTask = this.tasks.find(task => task.taskId === taskId);
    if (!foundTask) {
      throw new UnableToFetchTaskError({
        details: taskId,
      });
    }
    return foundTask;
  }

  public async searchTask(taskCriteria: TaskSearchCriteria): Promise<TaskPage> {
    const { pageResultSettings } = taskCriteria;

    const sortedTasks = this.tasks.sort(
      (taskA, taskB) => taskB.updatedDate.getTime() - taskA.updatedDate.getTime(),
    );
    const regexForDescription = new RegExp(taskCriteria.description, 'i');
    const regexForTitle = new RegExp(taskCriteria.title, 'i');
    const filteredAndSortedTasks = sortedTasks.filter(
      (task, index) =>
        regexForDescription.test(task.description) &&
        regexForTitle.test(task.title) &&
        task.status === taskCriteria.status &&
        index > pageResultSettings.offset - 1 &&
        index < pageResultSettings.offset + pageResultSettings.limit,
    );

    const hasMorePages = pageResultSettings.limit + pageResultSettings.offset < sortedTasks.length;

    const taskPage: TaskPage = {
      hasNextPage: hasMorePages,
      limit: pageResultSettings.limit,
      nextPageOffset: hasMorePages ? pageResultSettings.limit + pageResultSettings.offset : 0,
      tasks: filteredAndSortedTasks,
    };
    return taskPage;
  }

  public async getAllTasks(pageResultSettings: PageResultSettings): Promise<TaskPage> {
    const sortedAndFilteredTasks = this.tasks
      .sort((taskA, taskB) => taskB.updatedDate.getTime() - taskA.updatedDate.getTime())
      .filter(
        (task, index) =>
          index > pageResultSettings.offset - 1 &&
          index < pageResultSettings.offset + pageResultSettings.limit,
      );

    const hasMorePages = pageResultSettings.limit + pageResultSettings.offset < this.tasks.length;

    const taskPage: TaskPage = {
      hasNextPage: hasMorePages,
      limit: pageResultSettings.limit,
      nextPageOffset: hasMorePages ? pageResultSettings.limit + pageResultSettings.offset : 0,
      tasks: sortedAndFilteredTasks,
    };
    return taskPage;
  }

  public async deleteTask(taskId: number): Promise<boolean> {
    let found = false;
    this.tasks.forEach((task, index) => {
      if (task.taskId === taskId) {
        found = true;
        this.tasks.splice(index, 1);
      }
    });
    if (!found) {
      throw new UnableToDeleteTaskError();
    }
    return found;
  }

  public async clearAllTasks() {
    this.tasks = [];
  }
}
