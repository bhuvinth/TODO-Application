import HttpStatusCodes from '@main/common/types/httpStatusEnum';
import InfraError from './infraError';

export default class UnableToSaveTaskError extends InfraError {
  public static defaultHttpStatusCode = HttpStatusCodes.INTERNAL_ERROR;

  public static defaultErrorCode = 'UNABLE_TO_SAVE_TASK';

  public static defaultName = 'UNABLE_TO_SAVE_TASK';
}
