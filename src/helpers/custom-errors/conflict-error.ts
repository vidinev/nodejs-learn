import { ApiError } from './api-error';

const httpStatus  = require('http-status-codes');

export class ConflictError extends ApiError {
  constructor(message?: string) {
    super(message || 'Conflict error', httpStatus.CONFLICT);
  }
}
