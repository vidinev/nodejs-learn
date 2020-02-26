import { Request, Response, NextFunction } from 'express';
import { signUpSchema } from './sign-up.schema';

export const signUpValidator = async (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = signUpSchema.validate(req.body);

  if (error) {
    return res.send(error);
  }
  req.body = value;
  next();
};
