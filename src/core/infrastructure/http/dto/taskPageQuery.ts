import { IsOptional, IsNumber } from 'class-validator';
import TaskStatusEnum from '@main/common/types/taskStatusEnum';

export default class TaskPageQuery {
  @IsOptional()
  public titleQuery?: string = '';

  @IsOptional()
  public descriptionQuery?: string = '';

  @IsOptional()
  public status: TaskStatusEnum = TaskStatusEnum.Completed;

  @IsNumber()
  public limit: number;

  @IsNumber()
  public offset: number;
}
