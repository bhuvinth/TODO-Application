import HttpStatusCodes from '@main/common/types/httpStatusEnum';

import InfraError from './infraError';

export default class UnableToDeleteTaskError extends InfraError {
  public static defaultHttpStatusCode = HttpStatusCodes.CONFLICT;

  public static defaultErrorCode = 'UNABLE_TO_DELETE_TASK';

  public static defaultName = 'UNABLE_TO_DELETE_TASK';
}
