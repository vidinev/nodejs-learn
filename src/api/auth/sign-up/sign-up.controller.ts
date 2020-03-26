import { Request, Response, NextFunction } from 'express';
import { User } from '../../../models/user/user.model';
import { AuthService } from '../auth.service';
const HttpStatus = require('http-status-codes');

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const userParams: User = req.body;
  try {
    await AuthService.signUp(userParams);
    res.sendStatus(HttpStatus.CREATED);
  } catch (error) {
    console.log('Sign Up error');
    return next(error);
  }
};
