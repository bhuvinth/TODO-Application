import TaskDTO from '@core/infrastructure/http/dto/taskDTO';
import TaskRepositoryInterface from '@core/infrastructure/database/TaskRepositoryInterface';
import TaskPageQuery from '@core/infrastructure/http/dto/taskPageQuery';
import { Service, Inject } from 'typedi';
import TaskMapper from './taskMapper';
import { TaskSearchCriteria } from '../infrastructure/database/taskCriteria';
import TaskPageDTO from '../infrastructure/http/dto/taskPageDTO';
import IocConstants from '../infrastructure/ioc/constants';

@Service()
export default class TaskApplicationService {
  // eslint-disable-next-line no-useless-constructor
  public constructor(
    @Inject(IocConstants.TaskRepository)
    private taskRepositoryObj: TaskRepositoryInterface, // eslint-disable-next-line no-empty-function
  ) {}

  public async addTask(taskDtoObj: TaskDTO): Promise<TaskDTO> {
    const taskEntityObj = TaskMapper.fromDtoToEntity(taskDtoObj);
    const createdTask = await this.taskRepositoryObj.addTask(taskEntityObj);
    return TaskMapper.fromEntityToDto(createdTask);
  }

  public async updateTask(taskId: number, taskDtoObj: TaskDTO): Promise<TaskDTO> {
    const taskEntityObj = TaskMapper.fromDtoToEntity(taskDtoObj, taskId);
    const updatedTask = await this.taskRepositoryObj.updateTask(taskEntityObj);
    return TaskMapper.fromEntityToDto(updatedTask);
  }

  public async searchTaskByCriteria(searchQuery: TaskPageQuery): Promise<TaskPageDTO> {
    const taskCriteria: TaskSearchCriteria = TaskMapper.fromSearchQueryToTaskSearchCriteria(
      searchQuery,
    );
    const searchTaskPage = await this.taskRepositoryObj.searchTask(taskCriteria);
    const taskPageDto: TaskPageDTO = TaskMapper.fromTaskPageToTaskPageDto(searchTaskPage);
    return taskPageDto;
  }

  public async getAllTasks(searchQuery: TaskPageQuery): Promise<TaskPageDTO> {
    const taskCriteria = TaskMapper.fromSearchQueryToTaskSearchCriteria(searchQuery);
    const getAllTaskResult = await this.taskRepositoryObj.getAllTasks(
      taskCriteria.pageResultSettings,
    );
    const taskPageDTO = TaskMapper.fromTaskPageToTaskPageDto(getAllTaskResult);
    return taskPageDTO;
  }

  public async getTaskById(taskId: number): Promise<TaskDTO> {
    const getTaskResult = await this.taskRepositoryObj.getTask(taskId);
    return TaskMapper.fromEntityToDto(getTaskResult);
  }

  public async deleteTaskById(taskId: number): Promise<boolean> {
    const deleteTaskResult = await this.taskRepositoryObj.deleteTask(taskId);
    return deleteTaskResult;
  }
}
