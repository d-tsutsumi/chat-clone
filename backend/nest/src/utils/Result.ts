export class Success<T> {
  readonly isSuccess = true;
  readonly isFailure = false;
  constructor(readonly value: T) {}

  static create<U>(value: U) {
    return new Success(value);
  }
}

export class Failure<E extends Error> {
  readonly isSuccess = false;
  readonly isFailure = true;
  constructor(readonly value: E) {}

  static create<ERR extends Error>(value: ERR) {
    return new Failure(value);
  }
}

export const isResultError = <T, E extends Error>(
  result: Result<T, E>,
): result is Failure<E> => result.isFailure;

export type Result<T, E extends Error> = Success<T> | Failure<E>;
