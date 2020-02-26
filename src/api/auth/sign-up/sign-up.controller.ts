import { Request, Response } from 'express';
import { User } from '../../../models/user.model';

export const signUp = async (req: Request, res: Response) => {

 const userParams: User = req.body;
 // await User.sync({ force: true });

 if (await User.findOne({ where: { email: userParams.email } })) {
  res.send({ message: `Email ${userParams.email} is already taken` });
  return;
 }

 await User.create(userParams);

 const users = await User.findAll();
 console.log('All users:', JSON.stringify(users, null, 4));
 res.send({ success: 'Created' });
};
