import 'reflect-metadata';
import AppConfig from '@main/config/appConfig';
import { createExpressServer } from 'routing-controllers';

import databaseConnectionManager from '@main/common/database/databaseConnectionManager';

import loggerMiddleware from './middlewares/logger';
import authenticationHelper from './authenticationHelper';
// import CustomErrorHandler from './middlewares/customErrorHandler';

createExpressServer({
  authorizationChecker: authenticationHelper,
  routePrefix: '/api',
  controllers: [`${__dirname}/controllers/*.ts`],
  middlewares: [loggerMiddleware],
  defaultErrorHandler: true,
}).listen(AppConfig.serverPort, async () => {
  await databaseConnectionManager.getConnection();
  console.log(`App listening on the http://localhost:${AppConfig.serverPort}`);
});
