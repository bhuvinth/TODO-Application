import InfraError from './infraError';

export default class UnableToFetchTaskError extends InfraError {
  public static defaultErrorCode = 'CANNOT_FETCH_TASK_DETAILS';
}
