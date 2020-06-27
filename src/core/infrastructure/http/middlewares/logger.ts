import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'after' })
export default class LoggingMiddleware implements ExpressMiddlewareInterface {
  // eslint-disable-next-line class-methods-use-this
  use(request: any, response: any, next: Function): void {
    console.log(request, response);
    next();
  }
}
