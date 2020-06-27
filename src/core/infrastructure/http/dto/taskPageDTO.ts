import TaskDTO from './taskDTO';

export default class TaskPageDTO {
  public tasks: TaskDTO[];

  public nextPageOffset: number;

  public limit: number;

  public hasNextPage: boolean;
}
