import 'reflect-metadata';
import AppConfig from '@main/config/appConfig';
import { createExpressServer } from 'routing-controllers';

import loggerMiddleware from './middlewares/logger';

createExpressServer({
  routePrefix: '/api',
  controllers: [`${__dirname}/controllers/*.ts`],
  middlewares: [loggerMiddleware],
}).listen(AppConfig.serverPort, () => {
  console.log(`App listening on the http://localhost:${AppConfig.serverPort}`);
});
