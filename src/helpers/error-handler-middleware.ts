import { Request, Response, NextFunction } from 'express';
import { Environment } from '../enums/environment.enum';
import { config } from '../config'

const defaultMessage = 'Something went wrong';

export function errorHandlerMiddleware(err: any, req: Request, res: Response, _next: NextFunction) {
  const errStatus = err.status || 500;
  let error = { message: defaultMessage };

  if (err && err.status && err.message) {
    error = err;
  } else if (config.env === Environment.Prod) {
    error.message = defaultMessage;
  } else {
    error.message = err.stack || err;
  }
  res.status(errStatus).send({ error: error.message });
}
