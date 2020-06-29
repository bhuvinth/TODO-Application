import { Container } from 'typedi';
import TaskRepository from '@core/infrastructure/database/taskRepository';
import { Auth0Provider } from '@main/authenticationProviders';
import IocConstants from './constants';

function initContainer() {
  Container.set([
    { id: IocConstants.TaskRepository, value: new TaskRepository() },
    {
      id: IocConstants.AuthenticationProvider,
      value: new Auth0Provider(),
    },
  ]);
}

export default initContainer;
