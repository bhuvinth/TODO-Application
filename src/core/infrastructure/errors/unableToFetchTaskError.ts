import HttpStatusCodes from '@main/common/types/httpStatusEnum';
import InfraError from './infraError';

export default class UnableToFetchTaskError extends InfraError {
  public static defaultHttpStatusCode = HttpStatusCodes.BAD_REQUEST;

  public static defaultErrorCode = 'CANNOT_FETCH_TASK_DETAILS';

  public static defaultName = 'CANNOT_FETCH_TASK_DETAILS';
}
