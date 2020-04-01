import { User } from '../../../models/user/user.model';

export interface LoginResult {
  user: User;
  token: string;
}
