import * as env from 'env-var';
import TaskStatusEnum from '@main/common/types/taskStatusEnum';

export default class AppConfig {
  public static databaseConfiguration = {
    hostName: env
      .get('DATABASE_HOST_NAME')
      .required()
      .asString(),
    port: env
      .get('DATABASE_PORT')
      .default(5432)
      .asIntPositive(),
    userName: env
      .get('DATABASE_USER_NAME')
      .required()
      .asString(),
    password: env
      .get('DATABASE_PASSWORD')
      .required()
      .asString(),
    schemaName: env
      .get('DATABASE_SCHEMA_NAME')
      .required()
      .asString(),
  };

  public static authToken = env.get('AUTH_TOKEN');

  public static serverPort = env.get('PORT').default(5000);

  public static searchDefaultSettings = {
    defaultTaskStatus: AppConfig.getDefaultStatus(),
    defaultResultPageSize: process.env.PAGE_SIZE,
  };

  private static getDefaultStatus(): TaskStatusEnum[] {
    const taskStatusEnum: TaskStatusEnum[] = [];
    const envTaskStatusArray = env.get('TASK_STATUS').asArray(',');
    if (!envTaskStatusArray || !envTaskStatusArray.length) {
      taskStatusEnum.push(TaskStatusEnum.Completed);
      return taskStatusEnum;
    }

    Object.keys(TaskStatusEnum).forEach(taskStatus => {
      const taskStatusValue = TaskStatusEnum[taskStatus as keyof typeof TaskStatusEnum];
      if (envTaskStatusArray.includes(taskStatusValue.toString())) {
        taskStatusEnum.push(taskStatusValue);
      }
    });
    return taskStatusEnum;
  }
}
