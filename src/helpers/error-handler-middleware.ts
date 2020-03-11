import { Request, Response, ErrorRequestHandler } from 'express';

export function errorHandler(err: ErrorRequestHandler, req: Request, res: Response) {
  res.status(500).send({ error: 'Something failed!' });
}
