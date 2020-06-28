import TaskStatusEnum from '@main/common/types/taskStatusEnum';
import { IsEnum, MinLength, MaxLength } from 'class-validator';
import { Exclude } from 'class-transformer';

export default class TaskDTO {
  public taskId: number;

  @MinLength(1, { message: 'Title is required for creating a task.' })
  @MaxLength(500)
  title: string;

  @MaxLength(500)
  public description: string;

  @IsEnum(TaskStatusEnum)
  public status: TaskStatusEnum;

  @Exclude()
  public createdAt: Date;

  @Exclude()
  public updatedAt: Date;
}
