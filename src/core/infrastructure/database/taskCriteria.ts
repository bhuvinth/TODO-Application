import TaskStatusEnum from '@main/common/types/taskStatusEnum';

export type TaskSearchCriteria = {
  title: string;

  description: string;

  status: TaskStatusEnum;

  pageResultSettings: PageResultSettings;
};

export type PageResultSettings = {
  limit: number;
  offset: number;
};
