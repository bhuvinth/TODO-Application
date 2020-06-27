import InfraError from './infraError';

export default class UnableToSaveTaskError extends InfraError {
  public static defaultErrorCode = 'UNABLE_TO_SAVE_TASK';
}
