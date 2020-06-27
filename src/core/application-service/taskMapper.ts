import TaskDTO from '../infrastructure/http/dto/taskDTO';
import TaskEntity from '../infrastructure/database/taskEntity';

export default class TaskMapper {
  public static fromDtoToEntity(taskDtoObj: TaskDTO): TaskEntity {
    const taskEntityObj = new TaskEntity();
    taskEntityObj.description = taskDtoObj.description;
    taskEntityObj.status = taskDtoObj.status;
    taskEntityObj.taskId = taskDtoObj.taskId;
    taskEntityObj.title = taskDtoObj.title;
    return taskEntityObj;
  }

  public static fromEntityToDto(taskEntityObj: TaskEntity): TaskDTO {
    const taskDtoObj = new TaskDTO();
    taskDtoObj.description = taskEntityObj.description;
    taskDtoObj.status = taskEntityObj.status;
    taskDtoObj.taskId = taskEntityObj.taskId;
    taskDtoObj.title = taskEntityObj.title;
    return taskDtoObj;
  }

  public static fromEntityArrayToDtoArray(taskEntityArray: TaskEntity[]): TaskDTO[] {
    const taskDtoArray: TaskDTO[] = taskEntityArray.map(taskEntityObj => {
      return TaskMapper.fromEntityToDto(taskEntityObj);
    });
    return taskDtoArray;
  }
}
