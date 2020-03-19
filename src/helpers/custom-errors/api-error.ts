const httpStatus = require('http-status-codes');

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);

    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.status = status || httpStatus.INTERNAL_SERVER_ERROR;
    this.message = message;
  }
}
