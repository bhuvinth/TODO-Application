import ApplicationError from './applicationError';
import HttpStatusCodes from '../types/httpStatusEnum';

export default class AuthenticationError extends ApplicationError {
  public static httpCode = HttpStatusCodes.UNAUTHORIZED;

  public static defaultErrorCode = 'AUTHENTICATION_ERROR';
}
