import InfraError from './infraError';

export default class UnableToDeleteTaskError extends InfraError {
  public static defaultErrorCode = 'UNABLE_TO_DELETE_TASK';
}
