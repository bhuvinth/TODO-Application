import ApplicationError from '@main/common/errors/applicationError';
import HttpStatusCodes from '@main/common/types/httpStatusEnum';

export default class InfraError extends ApplicationError {
  public static defaultHttpStatusCode = HttpStatusCodes.INTERNAL_ERROR;

  public static defaultErrorCode = 'INFRASTRUCTURE_ERROR';

  public static defaultName = 'INFRASTRUCTURE_ERROR';
}
