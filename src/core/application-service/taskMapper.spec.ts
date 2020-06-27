import TaskDTO from '../infrastructure/http/dto/taskDTO';
import TaskStatusEnum from '../../common/types/taskStatusEnum';
import TaskMapper from './taskMapper';
import TaskEntity from '../infrastructure/database/taskEntity';

describe('Test Suite for testing Task Mapper', () => {
  test('Should map DTO to Entity succesfully with valid data', () => {
    const taskDtoObj = new TaskDTO();
    taskDtoObj.description = 'Dummy description';
    taskDtoObj.status = TaskStatusEnum.New;
    taskDtoObj.title = 'Get the Code done';

    const taskEntityObj = TaskMapper.fromDtoToEntity(taskDtoObj);

    expect(taskEntityObj).toBeDefined();
    expect(taskEntityObj.description).toEqual(taskDtoObj.description);
    expect(taskEntityObj.status).toEqual(taskDtoObj.status);
    expect(taskEntityObj.title).toEqual(taskDtoObj.title);
  });

  test('Should map Entity to DTO succesfully with valid data', () => {
    const taskEntityObj = new TaskEntity();
    taskEntityObj.description = 'Dummy description';
    taskEntityObj.status = TaskStatusEnum.New;
    taskEntityObj.title = 'Get the Code done';

    const taskDtoObj = TaskMapper.fromEntityToDto(taskEntityObj);

    expect(taskDtoObj).toBeDefined();
    expect(taskDtoObj.description).toEqual(taskEntityObj.description);
    expect(taskDtoObj.status).toEqual(taskEntityObj.status);
    expect(taskDtoObj.title).toEqual(taskEntityObj.title);
  });

  test('Should map Entity to DTO succesfully with valid data', () => {
    const taskEntityObj1 = new TaskEntity();
    taskEntityObj1.description = 'Dummy description';
    taskEntityObj1.status = TaskStatusEnum.New;
    taskEntityObj1.title = 'Get the Code done';

    const taskEntityObj2 = new TaskEntity();
    taskEntityObj2.description = 'Dummy description';
    taskEntityObj2.status = TaskStatusEnum.New;
    taskEntityObj2.title = 'Start working with Vantik';

    const taskEntityArray: TaskEntity[] = [];
    taskEntityArray.push(taskEntityObj1);
    taskEntityArray.push(taskEntityObj2);

    const taskDtoArray = TaskMapper.fromEntityArrayToDtoArray(taskEntityArray);

    expect(taskDtoArray).toBeDefined();
    expect(taskDtoArray).toHaveLength(2);

    const taskDtoObj1 = taskDtoArray[0];
    expect(taskDtoObj1).toBeDefined();
    expect(taskDtoObj1.description).toEqual(taskEntityObj1.description);
    expect(taskDtoObj1.status).toEqual(taskEntityObj1.status);
    expect(taskDtoObj1.title).toEqual(taskEntityObj1.title);

    const taskDtoObj2 = taskDtoArray[1];
    expect(taskDtoObj2).toBeDefined();
    expect(taskDtoObj2.description).toEqual(taskEntityObj2.description);
    expect(taskDtoObj2.status).toEqual(taskEntityObj2.status);
    expect(taskDtoObj2.title).toEqual(taskEntityObj2.title);
  });
});
