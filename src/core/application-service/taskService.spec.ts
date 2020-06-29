import { Container } from 'typedi';
import TaskDTO from '../infrastructure/http/dto/taskDTO';
import TaskStatusEnum from '../../common/types/taskStatusEnum';
import MockTaskRepository from './mocks/mockTaskRepository';
import TaskPageQuery from '../infrastructure/http/dto/taskPageQuery';
import UnableToFetchTaskError from '../infrastructure/errors/unableToFetchTaskError';
import UnableToDeleteTaskError from '../infrastructure/errors/unableToDeleteTaskError';
import TaskApplicationService from './taskService';
import IocConstants from '../../common/ioc/constants';

// const mockRepository = jest.genMockFromModule('../infrastructure/database/taskRepository');

describe('Test Suite to test TaskApplicationService', () => {
  const mockRepository = new MockTaskRepository();
  Container.set([{ id: IocConstants.TaskRepository, value: mockRepository }]);
  const taskApplicationService: TaskApplicationService = Container.get(TaskApplicationService);
  beforeEach(() => {
    mockRepository.clearAllTasks();
  });

  async function addTaskAndValidate(
    title = 'Do this Task',
    description = 'description of this task',
    taskStatus = TaskStatusEnum.InProgress,
  ) {
    const taskDtoObj = new TaskDTO();
    taskDtoObj.description = description;
    taskDtoObj.status = taskStatus;
    taskDtoObj.title = title;
    const addedTask = await taskApplicationService.addTask(taskDtoObj);

    expect(addedTask).toBeDefined();
    expect(addedTask.taskId).toBeGreaterThan(0);

    taskDtoObj.taskId = addedTask.taskId;
    taskDtoObj.createdAt = addedTask.createdAt;
    taskDtoObj.updatedAt = addedTask.updatedAt;
    expect(addedTask).toEqual(taskDtoObj);
    return addedTask;
  }

  test('Should add a Task successfully', async () => {
    await addTaskAndValidate();
  });

  test('Should update a Task successfully', async () => {
    const addedTask = await addTaskAndValidate();

    addedTask.title = 'Updated Task';
    addedTask.description = 'updated description';
    addedTask.status = TaskStatusEnum.Completed;
    const updateTask = await taskApplicationService.updateTask(addedTask.taskId, addedTask);

    expect(updateTask).toBeDefined();
    expect(updateTask.title).toEqual(addedTask.title);
    expect(updateTask.description).toEqual(addedTask.description);
    expect(addedTask.status).toEqual(addedTask.status);
  });

  async function sleepForMs(timeInMs: number) {
    await new Promise(resolve => {
      setTimeout(resolve, timeInMs);
    });
  }
  test('Should search tasks successfully', async () => {
    const addedTask1 = await addTaskAndValidate(
      'task 1',
      'task 1 Description',
      TaskStatusEnum.Completed,
    );
    await sleepForMs(2000);
    const addedTask2 = await addTaskAndValidate(
      'task 2',
      'task 2 description',
      TaskStatusEnum.Completed,
    );

    const searchPageQueryObj = new TaskPageQuery();
    searchPageQueryObj.descriptionQuery = 'task';

    searchPageQueryObj.limit = 1;
    searchPageQueryObj.offset = 0;
    searchPageQueryObj.titleQuery = 'task';

    const searchedValues = await taskApplicationService.searchTaskByCriteria(searchPageQueryObj);
    expect(searchedValues).toBeDefined();
    expect(searchedValues.hasNextPage).toEqual(true);
    expect(searchedValues.limit).toEqual(searchPageQueryObj.limit);

    expect(searchedValues.nextPageOffset).toBeGreaterThan(0);
    expect(searchedValues.tasks[0]).toEqual(addedTask2);

    searchPageQueryObj.offset = searchedValues.nextPageOffset;
    const secondPage = await taskApplicationService.searchTaskByCriteria(searchPageQueryObj);
    expect(secondPage).toBeDefined();
    expect(secondPage.hasNextPage).toEqual(false);
    expect(secondPage.limit).toEqual(searchPageQueryObj.limit);

    expect(secondPage.nextPageOffset).toEqual(0);
    expect(secondPage.tasks[0]).toEqual(addedTask1);
    expect(secondPage.hasNextPage).toEqual(false);
    expect(secondPage.limit).toEqual(searchPageQueryObj.limit);
  });

  test('Should get all tasks successfully', async () => {
    const addedTask1 = await addTaskAndValidate(
      'task 1',
      'task 1 Description',
      TaskStatusEnum.Completed,
    );
    await sleepForMs(2000);
    const addedTask2 = await addTaskAndValidate(
      'task 2',
      'task 2 description',
      TaskStatusEnum.Completed,
    );

    const searchPageQueryObj = new TaskPageQuery();
    searchPageQueryObj.limit = 1;
    searchPageQueryObj.offset = 0;

    const page1Result = await taskApplicationService.getAllTasks(searchPageQueryObj);
    expect(page1Result).toBeDefined();
    expect(page1Result.hasNextPage).toEqual(true);
    expect(page1Result.limit).toEqual(searchPageQueryObj.limit);

    expect(page1Result.nextPageOffset).toBeGreaterThan(0);
    expect(page1Result.tasks[0]).toEqual(addedTask2);

    searchPageQueryObj.offset = page1Result.nextPageOffset;
    const page2Result = await taskApplicationService.searchTaskByCriteria(searchPageQueryObj);
    expect(page2Result).toBeDefined();
    expect(page2Result.hasNextPage).toEqual(false);
    expect(page2Result.limit).toEqual(searchPageQueryObj.limit);

    expect(page2Result.nextPageOffset).toEqual(0);
    expect(page2Result.tasks[0]).toEqual(addedTask1);
    expect(page2Result.hasNextPage).toEqual(false);
    expect(page2Result.limit).toEqual(searchPageQueryObj.limit);
  });

  test('Should get Task By ID successfully for valid Id', async () => {
    const addedTask1 = await addTaskAndValidate(
      'task 1',
      'task 1 Description',
      TaskStatusEnum.Completed,
    );

    const getTaskResult = await taskApplicationService.getTaskById(addedTask1.taskId);

    expect(getTaskResult).toBeDefined();
    expect(getTaskResult).toEqual(addedTask1);
  });

  test('Should fail to get a Task By ID for Invalid Id', async () => {
    const getTaskResultPromise = taskApplicationService.getTaskById(Number.MAX_SAFE_INTEGER);

    expect(getTaskResultPromise).rejects.toThrow(UnableToFetchTaskError);
  });

  test('Should delete Task By ID successfully for valid Id', async () => {
    const addedTask1 = await addTaskAndValidate(
      'task 1',
      'task 1 Description',
      TaskStatusEnum.Completed,
    );

    const deleteTaskResult = await taskApplicationService.deleteTaskById(addedTask1.taskId);

    expect(deleteTaskResult).toBeTruthy();
  });

  test('Should fail to delete a Task By ID for Invalid Id', async () => {
    const deleteTaskResultPromise = taskApplicationService.deleteTaskById(Number.MAX_SAFE_INTEGER);

    expect(deleteTaskResultPromise).rejects.toThrow(UnableToDeleteTaskError);
  });
});
