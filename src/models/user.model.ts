import Sequelize from 'sequelize';
import { loshSequelize } from '../sequelize';
const bCrypt = require('bcrypt');

const Model = Sequelize.Model;

export class User extends Model {
  email: string;
  password: string;
}
User.init({
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
  modelName: 'user',
  hooks: {
    beforeCreate: (user, options) => {
      user.password = bCrypt.hashSync(user.password, 10);
    },
  }
});
