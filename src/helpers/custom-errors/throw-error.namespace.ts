import { ConflictError } from './conflict-error';
import { ForbiddenError } from './forbidden-error';

export namespace ErrorThrow {
  export function conflict(message: string) {
    throw new ConflictError(message);
  }
  export function forbidden(message: string) {
    throw new ForbiddenError(message);
  }
}
