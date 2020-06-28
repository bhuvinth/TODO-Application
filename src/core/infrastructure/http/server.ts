import 'reflect-metadata';
import AppConfig from '@main/config/appConfig';
import { createExpressServer, useContainer } from 'routing-controllers';
import databaseConnectionManager from '@main/common/database/databaseConnectionManager';
import { Container } from 'typedi';

import loggerMiddleware from './middlewares/logger';
import authenticationHelper from './authenticationHelper';
import initContainer from '../ioc/container';
import taskController from './controllers/tasksController';

useContainer(Container);
createExpressServer({
  authorizationChecker: authenticationHelper,
  routePrefix: '/api',
  controllers: [taskController],
  middlewares: [loggerMiddleware],
  defaultErrorHandler: true,
}).listen(AppConfig.serverPort, async () => {
  await databaseConnectionManager.getConnection();
  initContainer();

  console.log(`App listening on the http://localhost:${AppConfig.serverPort}`);
});
