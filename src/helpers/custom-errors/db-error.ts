import { ValidationErrorItem } from 'sequelize';

export class DbError extends Error {
  details: ValidationErrorItem[] = [];
  isSql: boolean;
  fields: { [field: string]: string };

  constructor(message: string, details?: ValidationErrorItem[], fields?: { [field: string]: string }) {
    super(message);
    this.name = 'Sql db error';
    Error.captureStackTrace(this, this.constructor);
    this.message = message;
    this.fields = fields || { };
    this.isSql = true;
    this.details = details || [];
  }
}
