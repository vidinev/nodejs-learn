import { Table, Column, Model, IsUUID, PrimaryKey, Unique, BeforeCreate, DefaultScope } from 'sequelize-typescript';
const bCrypt = require('bcrypt');
const uuid = require('uuid/v4');

@DefaultScope(() => ({
  attributes: {
    exclude: ['password']
  }
}))
@Table({
  timestamps: true
})
export class User extends Model<User> {

  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  nickname: string;

  @Unique
  @Column
  email: string;

  @Column
  emailVerified: boolean;

  @Column
  phone: string;

  @Column
  phoneVerified: boolean;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  password: string;

  @BeforeCreate
  static hashPassword(instance: User) {
    instance.password = bCrypt.hashSync(instance.password, 10);
    instance.id = uuid();
  }
}

User.prototype.toJSON =  function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
};
