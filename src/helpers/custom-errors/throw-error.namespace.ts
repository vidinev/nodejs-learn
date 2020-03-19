import { ConflictError } from './conflict-error';

export namespace ErrorThrow {
  export function conflict(message: string) {
    throw new ConflictError(message);
  }
}
