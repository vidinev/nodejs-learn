import { ApiError } from './api-error';

const httpStatus  = require('http-status-codes');

export class ForbiddenError extends ApiError {
  constructor(message?: string) {
    super(message || 'Forbidden error', httpStatus.FORBIDDEN);
  }
}
