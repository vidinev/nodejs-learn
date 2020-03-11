import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export function logErrors(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  console.error(err);
  next(err);
}
