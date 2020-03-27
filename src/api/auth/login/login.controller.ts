import { Request, Response, NextFunction } from 'express';
const HttpStatus = require('http-status-codes');

export const login = async (req: Request, res: Response, next: NextFunction) => {

  try {

    res.sendStatus(HttpStatus.OK);
  } catch (error) {
    console.log('Login error');
    return next(error);
  }
};
