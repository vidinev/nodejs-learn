import { Request, Response, NextFunction } from 'express';
import { loginSchema } from './login.schema';

export const loginValidator = async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = loginSchema.validate(req.body);

  if (error) {
    return res.send(error);
  }
  req.body = value;
  next();
};
