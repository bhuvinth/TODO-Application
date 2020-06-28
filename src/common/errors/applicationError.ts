import HttpStatusCodes from '../types/httpStatusEnum';

export interface IApplicationError {
  message?: string;
  error?: Error;
  code?: string;
  details?: Object;
  name?: string;
  httpStatusCode?: HttpStatusCodes;
}

export default class ApplicationError extends Error {
  public static defaultHttpStatusCode = HttpStatusCodes.INTERNAL_ERROR;

  public static defaultErrorCode = 'APPLICATION_ERROR';

  public static defaultName = 'APPLICATION_ERROR';

  public httpCode: HttpStatusCodes;

  public code: string;

  public message: string;

  public details: Object;

  constructor(params?: IApplicationError) {
    // eslint-disable-next-line no-param-reassign
    params = params || {};
    const message = ApplicationError.buildErrorMessageFromParams(params);

    super(message);

    this.code = params.code || (this.constructor as typeof ApplicationError).defaultErrorCode;
    this.name = params.name || (this.constructor as typeof ApplicationError).defaultName;
    this.httpCode =
      params.httpStatusCode || (this.constructor as typeof ApplicationError).defaultHttpStatusCode;
    this.message = message;
    this.details = params.details || {};
  }

  public static buildErrorMessageFromParams(params: IApplicationError): string {
    const defaultMessage = 'Something went wrong';
    if (params.message) {
      return params.message;
    }
    if (params.error) {
      return params.error.message;
    }
    return defaultMessage;
  }
}
