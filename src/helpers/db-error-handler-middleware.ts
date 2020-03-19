import { NextFunction, Request, Response } from 'express';
import { BaseError, ValidationErrorItem } from 'sequelize';
import { DbError } from './custom-errors/db-error';
const HttpStatus = require('http-status-codes');

type SqlError = BaseError & { errors?: ValidationErrorItem[], fields?: { [field: string]: string } };

export function dbErrorHandlerMiddleware(error: SqlError, req: Request, res: Response, next: NextFunction) {
  if (error && (error instanceof BaseError)) {
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send({
        error: new DbError(error.message, error.errors, error.fields)
      });
  }
  next(error);
}
