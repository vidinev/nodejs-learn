import { Request, Response, NextFunction } from 'express';
import { User } from '../../../models/user/user.model';
import { ErrorThrow } from '../../../helpers/custom-errors/throw-error.namespace';
const HttpStatus = require('http-status-codes');

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const userParams: User = req.body;
  try {
    if (await User.findOne({ where: { email: userParams.email } })) {
      return ErrorThrow.conflict(`Email ${userParams.email} is already taken`);
    }

    await User.create(userParams);
    res.sendStatus(HttpStatus.CREATED);
  } catch (error) {
    console.log('Sign Up error');
    return next(error);
  }
};
