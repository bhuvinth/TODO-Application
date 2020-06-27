import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import TaskStatusEnum from '@main/common/types/taskStatusEnum';

@Entity({ name: 'tasks' })
export default class TaskEntity {
  @PrimaryGeneratedColumn()
  public taskId: number;

  @Column()
  public title: string;

  @Column({
    type: 'simple-enum',
    enum: [TaskStatusEnum.New, TaskStatusEnum.InProgress, TaskStatusEnum.Completed],
    default: TaskStatusEnum.New,
  })
  public status: TaskStatusEnum;

  @Column()
  public description: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
