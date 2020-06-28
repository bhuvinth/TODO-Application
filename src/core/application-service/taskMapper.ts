import TaskDTO from '../infrastructure/http/dto/taskDTO';
import TaskEntity from '../infrastructure/database/taskEntity';
import TaskPageQuery from '../infrastructure/http/dto/taskPageQuery';
import { TaskSearchCriteria } from '../infrastructure/database/taskCriteria';
import TaskPage from '../infrastructure/database/taskPage';
import TaskPageDTO from '../infrastructure/http/dto/taskPageDTO';

export default class TaskMapper {
  public static fromDtoToEntity(taskDtoObj: TaskDTO, taskId?: number): TaskEntity {
    const taskEntityObj = new TaskEntity();
    taskEntityObj.description = taskDtoObj.description;
    taskEntityObj.status = taskDtoObj.status;
    taskEntityObj.taskId = taskId || taskDtoObj.taskId;
    taskEntityObj.title = taskDtoObj.title;
    return taskEntityObj;
  }

  public static fromEntityToDto(taskEntityObj: TaskEntity): TaskDTO {
    const taskDtoObj = new TaskDTO();
    taskDtoObj.description = taskEntityObj.description;
    taskDtoObj.status = taskEntityObj.status;
    taskDtoObj.taskId = taskEntityObj.taskId;
    taskDtoObj.title = taskEntityObj.title;
    taskDtoObj.createdAt = taskEntityObj.createdDate;
    taskDtoObj.updatedAt = taskEntityObj.updatedDate;
    return taskDtoObj;
  }

  public static fromEntityArrayToDtoArray(taskEntityArray: TaskEntity[]): TaskDTO[] {
    const taskDtoArray: TaskDTO[] = taskEntityArray.map(taskEntityObj => {
      return TaskMapper.fromEntityToDto(taskEntityObj);
    });
    return taskDtoArray;
  }

  public static fromSearchQueryToTaskSearchCriteria(
    searchQuery: TaskPageQuery,
  ): TaskSearchCriteria {
    return {
      description: searchQuery.descriptionQuery,
      status: searchQuery.status,
      title: searchQuery.titleQuery,
      pageResultSettings: {
        limit: searchQuery.limit,
        offset: searchQuery.offset,
      },
    };
  }

  public static fromTaskPageToTaskPageDto(taskPageObj: TaskPage) {
    const taskPageDtoObj: TaskPageDTO = {
      hasNextPage: taskPageObj.hasNextPage,
      limit: taskPageObj.limit,
      nextPageOffset: taskPageObj.nextPageOffset,
      tasks: TaskMapper.fromEntityArrayToDtoArray(taskPageObj.tasks),
    };
    return taskPageDtoObj;
  }
}
