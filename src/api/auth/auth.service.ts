import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { User } from '../../models/user/user.model';
import { ErrorThrow } from '../../helpers/custom-errors/throw-error.namespace';
import { LoginParams } from './interfaces/login-params.interface';
import { config } from '../../config';
import { LoginResult } from './interfaces/login-result.interface';

export class AuthService {
  static async signUp(userParams: User) {
    if (await User.findOne({ where: { email: userParams.email } })) {
      return ErrorThrow.conflict(`Email ${userParams.email} is already taken`);
    }
    await User.create(userParams);
  }

  static async login(loginParams: LoginParams): Promise<LoginResult> {
    const user = await User.findOne({ where: { email: loginParams.email } });
    if (user && await AuthService.comparePasswords(loginParams.password, user.password)) {
      const token = jwt.sign(user.toJSON(), config.jwtSecret);
      return { token, user: user.toJSON() as User };
    }
    ErrorThrow.forbidden(`Your username and/or password do not match`);
    return null;
  }

  private static async comparePasswords(bodyPassword: string, userHash: string): Promise<boolean> {
    return new Promise((resolve) => {
      bcrypt.compare(bodyPassword, userHash, (error: any, isMatch) => {
        if (error) {
          return false;
        }
        resolve(isMatch);
      });
    });
  }
}
