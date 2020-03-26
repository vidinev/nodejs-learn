import { User } from '../../models/user/user.model';
import { ErrorThrow } from '../../helpers/custom-errors/throw-error.namespace';

export class AuthService {
  static async signUp(userParams: User) {
    if (await User.findOne({ where: { email: userParams.email } })) {
      return ErrorThrow.conflict(`Email ${userParams.email} is already taken`);
    }
    await User.create(userParams);
  }
}
