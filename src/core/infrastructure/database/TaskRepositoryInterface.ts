import TaskEntity from './taskEntity';
import TaskPage from './taskPage';
import { TaskSearchCriteria, PageResultSettings } from './taskCriteria';

export default interface TaskRepositoryInterface {
  addTask(task: TaskEntity): Promise<TaskEntity>;

  updateTask(task: TaskEntity): Promise<TaskEntity>;

  getTask(taskId: number): Promise<TaskEntity>;

  searchTask(taskCriteria: TaskSearchCriteria): Promise<TaskPage>;

  getAllTasks(pageResultSettings: PageResultSettings): Promise<TaskPage>;

  deleteTask(taskId: number): Promise<boolean>;
}
