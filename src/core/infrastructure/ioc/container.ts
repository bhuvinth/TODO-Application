import { Container } from 'typedi';
import TaskRepository from '../database/taskRepository';
import IocConstants from './constants';

function initContainer() {
  Container.set([{ id: IocConstants.TaskRepository, value: new TaskRepository() }]);
}

export default initContainer;
