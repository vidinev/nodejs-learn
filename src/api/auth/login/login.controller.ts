import { Request, Response, NextFunction } from 'express';
import { LoginParams } from '../interfaces/login-params.interface';
import { AuthService } from '../auth.service';
const HttpStatus = require('http-status-codes');

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const loginParams: LoginParams = req.body;
  try {
    const loginResult = await AuthService.login(loginParams);
    if (loginResult) {
      res.status(HttpStatus.OK).send(loginResult);
      return;
    }
    res.status(HttpStatus.INTERNAL_SERVER_ERROR);
  } catch (error) {
    console.log('Login error');
    return next(error);
  }
};
