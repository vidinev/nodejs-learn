import { ValidationError } from 'sequelize';

export function getSequelizeError(error: ValidationError, message: string = 'Sequelize error') {
  if (error && error.errors) {
    return {
      isSql: true,
      details: error.errors
    };
  }
  return {
    isSql: true,
    details: [{ message }]
  };
}
