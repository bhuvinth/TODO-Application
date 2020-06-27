import TaskEntity from './taskEntity';

export default class TaskPage {
  public tasks!: TaskEntity[];

  public nextPageOffset: number;

  public limit: number;

  public hasNextPage: boolean;
}
