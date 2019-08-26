import Sequelize from 'sequelize';
import { loshSequelize } from '../sequelize';

const Model = Sequelize.Model;

export class User extends Model {
  nickName: string;
  email: string;
  password: string;
}
User.init({
  // attributes
  nickName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: loshSequelize,
  modelName: 'user'
});
