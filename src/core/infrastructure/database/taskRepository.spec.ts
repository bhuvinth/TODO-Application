import { Connection, createConnection } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import TaskEntity from './taskEntity';
import TaskRepository from './taskRepository';
import TaskStatusEnum from '../../../common/types/taskStatusEnum';
import UnableToSaveTaskError from '../errors/unableToSaveTaskError';
import UnableToFetchTaskError from '../errors/unableToFetchTaskError';
import { TaskSearchCriteria, PageResultSettings } from './taskCriteria';

describe('Task Repository test suite', () => {
  let connection: Connection = null;
  let taskRepository!: TaskRepository;

  beforeEach(async () => {
    if (!connection || !connection.isConnected) {
      connection = await createConnection({
        name: 'default',
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [TaskEntity],
        namingStrategy: new SnakeNamingStrategy(),
        synchronize: true,
        logging: false,
      });
      taskRepository = new TaskRepository();
      return connection;
    }
    taskRepository = new TaskRepository();
    return connection;
  });

  afterEach(async () => {
    return connection.close();
  });

  async function addValidTaskToDatabase(
    title = 'Do A Task',
    description = 'Describe the task',
  ): Promise<TaskEntity> {
    const taskEntity = new TaskEntity();
    taskEntity.title = title;
    taskEntity.description = description;

    const addedTask = await taskRepository.addTask(taskEntity);

    expect(addedTask).toBeTruthy();
    expect(addedTask.taskId).toBeDefined();
    expect(addedTask.title).toEqual(taskEntity.title);
    expect(addedTask.description).toEqual(taskEntity.description);
    expect(addedTask.status).toEqual(TaskStatusEnum.New);

    return addedTask;
  }

  test('Should save a new TODO Task succesfully with valid data', async () => {
    await addValidTaskToDatabase();
  });

  test('Should fail to save a new TODO Task with invalid data', async () => {
    const taskEntity = new TaskEntity();
    taskEntity.title = null;
    taskEntity.description = null;

    const invalidTaskPromise = taskRepository.addTask(taskEntity);

    expect(invalidTaskPromise).rejects.toThrow(UnableToSaveTaskError);
  });

  test('Should update existing Task with valid data', async () => {
    const addedTask = await addValidTaskToDatabase();
    addedTask.title = 'Updated Task';
    addedTask.description = 'Updated description';
    const updatedResult = await taskRepository.updateTask(addedTask);
    expect(updatedResult.title).toEqual(addedTask.title);
    expect(updatedResult.description).toEqual(addedTask.description);
  });

  test('Should fail to update with and invalid id', async () => {
    const addedTask = await addValidTaskToDatabase();
    addedTask.taskId = Number.MAX_SAFE_INTEGER;
    const updatedResultPromise = taskRepository.updateTask(addedTask);
    expect(updatedResultPromise).rejects.toThrow(UnableToFetchTaskError);
  });

  test('Should fail to update with and invalid Task Status', async () => {
    const addedTask = await addValidTaskToDatabase();
    addedTask.status = 'sdsd';
    const updatedResultPromise = taskRepository.updateTask(addedTask);
    expect(updatedResultPromise).rejects.toThrow(UnableToSaveTaskError);
  });

  test('Should get task by Valid Id', async () => {
    const addedTask = await addValidTaskToDatabase();
    const getTaskResult = await taskRepository.getTask(addedTask.taskId);

    expect(getTaskResult).toBeDefined();
    expect(getTaskResult.taskId).toEqual(addedTask.taskId);
    expect(getTaskResult.title).toEqual(addedTask.title);
    expect(getTaskResult.description).toEqual(addedTask.description);
    expect(getTaskResult.status).toEqual(addedTask.status);
  });

  test('Should fail to get task by Invalid Id', async () => {
    const updatedResultPromise = taskRepository.getTask(Number.MAX_SAFE_INTEGER);
    expect(updatedResultPromise).rejects.toThrow(UnableToFetchTaskError);
  });

  async function sleepForMs(timeInMs: number) {
    await new Promise(resolve => {
      setTimeout(resolve, timeInMs);
    });
  }

  test('Should fetch correct search results by Valid criteria with Valid Page settings', async () => {
    const firstSearchTask = await addValidTaskToDatabase('searchTask', 'Search Description');
    await sleepForMs(2000);
    const secondSearchTask = await addValidTaskToDatabase(
      'searchTaskSecond',
      'Search Description Second',
    );
    const taskCriteria: TaskSearchCriteria = {
      description: firstSearchTask.description.slice(0, 5),
      title: firstSearchTask.title.slice(0, 3),
      pageResultSettings: {
        limit: 1,
        offset: 0,
      },
      status: firstSearchTask.status,
    };

    const searchResultPage1 = await taskRepository.searchTask(taskCriteria);
    expect(searchResultPage1).toBeDefined();
    expect(searchResultPage1.tasks).toHaveLength(1);
    expect(searchResultPage1.hasNextPage).toEqual(true);
    expect(searchResultPage1.nextPageOffset).toBeGreaterThan(0);

    let [searchTaskResult] = searchResultPage1.tasks;
    expect(searchTaskResult).toBeDefined();
    expect(searchTaskResult.taskId).toEqual(secondSearchTask.taskId);
    expect(searchTaskResult.title).toEqual(secondSearchTask.title);
    expect(searchTaskResult.description).toEqual(secondSearchTask.description);
    expect(searchTaskResult.status).toEqual(secondSearchTask.status);

    taskCriteria.pageResultSettings.offset = searchResultPage1.nextPageOffset;

    const searchResultPage2 = await taskRepository.searchTask(taskCriteria);
    expect(searchResultPage2).toBeDefined();
    expect(searchResultPage2.tasks).toHaveLength(1);
    expect(searchResultPage2.hasNextPage).toEqual(false);
    expect(searchResultPage2.nextPageOffset).toBeDefined();

    [searchTaskResult] = searchResultPage2.tasks;

    expect(searchTaskResult).toBeDefined();
    expect(searchTaskResult.taskId).toEqual(firstSearchTask.taskId);
    expect(searchTaskResult.title).toEqual(firstSearchTask.title);
    expect(searchTaskResult.description).toEqual(firstSearchTask.description);
    expect(searchTaskResult.status).toEqual(firstSearchTask.status);
  });

  test('Should fetch correct all Tasks with Valid PageData', async () => {
    const firstTask = await addValidTaskToDatabase('task1', 'Task 1 Description');
    await sleepForMs(2000);
    const secondTask = await addValidTaskToDatabase('task2', 'Second Description');

    const pageResultSettings: PageResultSettings = {
      limit: 1,
      offset: 0,
    };

    const getAllTaskResultsPage1 = await taskRepository.getAllTasks(pageResultSettings);

    expect(getAllTaskResultsPage1).toBeDefined();
    expect(getAllTaskResultsPage1.tasks).toHaveLength(1);
    expect(getAllTaskResultsPage1.hasNextPage).toEqual(true);
    expect(getAllTaskResultsPage1.nextPageOffset).toEqual(1);

    let [pageResult] = getAllTaskResultsPage1.tasks;

    expect(pageResult).toBeDefined();
    expect(pageResult.taskId).toEqual(secondTask.taskId);
    expect(pageResult.title).toEqual(secondTask.title);
    expect(pageResult.description).toEqual(secondTask.description);
    expect(pageResult.status).toEqual(secondTask.status);

    pageResultSettings.offset = getAllTaskResultsPage1.nextPageOffset;

    const getAllTaskResultsPage2 = await taskRepository.getAllTasks(pageResultSettings);

    expect(getAllTaskResultsPage2).toBeDefined();
    expect(getAllTaskResultsPage2.tasks).toHaveLength(1);
    expect(getAllTaskResultsPage2.hasNextPage).toEqual(false);
    expect(getAllTaskResultsPage2.nextPageOffset).toEqual(0);

    [pageResult] = getAllTaskResultsPage2.tasks;

    expect(pageResult).toBeDefined();
    expect(pageResult.taskId).toEqual(firstTask.taskId);
    expect(pageResult.title).toEqual(firstTask.title);
    expect(pageResult.description).toEqual(firstTask.description);
    expect(pageResult.status).toEqual(firstTask.status);
  });

  test('Should delete task by Valid Id', async () => {
    const addedTask = await addValidTaskToDatabase();
    const deleteTaskResult = await taskRepository.deleteTask(addedTask.taskId);
    expect(deleteTaskResult).toBeTruthy();

    const getTaskResultPromise = taskRepository.getTask(addedTask.taskId);
    expect(getTaskResultPromise).rejects.toThrow(UnableToFetchTaskError);
  });

  test('Should delete task to fail for Invalid Id', async () => {
    const deleteTaskPromise = taskRepository.deleteTask(Number.MAX_SAFE_INTEGER);

    expect(deleteTaskPromise).rejects.toThrow(UnableToFetchTaskError);
  });
});
