import { Request, Response } from 'express';
import { User } from '../../../models/user/user.model';
import { getSequelizeError } from '../../../helpers/get-sequelize-error';

export const signUp = async (req: Request, res: Response) => {
  const userParams: User = req.body;
  try {
    const createdUser = await User.create(userParams);
    res.send(createdUser);
  } catch (error) {
    res.status(500)
      .send(getSequelizeError(error, `Can't create User`));
  }
};
