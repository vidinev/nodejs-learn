import {
  Table,
  Column,
  Model,
  IsUUID,
  PrimaryKey,
  Unique,
  BeforeCreate,
  DataType,
  Length
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
const bCrypt = require('bcrypt');

@Table({
  timestamps: true
})
export class User extends Model<User> {

  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.TEXT)
  id: string;

  @Length({ min: 4, max: 20 })
  @Column(DataType.TEXT)
  nickname: string;

  @Unique
  @Length({ min: 3, max: 320 })
  @Column(DataType.TEXT)
  email: string;

  @Column(DataType.BOOLEAN)
  emailVerified: boolean;

  @Length({ min: 4, max: 50 })
  @Column(DataType.TEXT)
  phone: string;

  @Column(DataType.BOOLEAN)
  phoneVerified: boolean;

  @Length({ min: 2, max: 20 })
  @Column(DataType.TEXT)
  firstName: string;

  @Length({ min: 2, max: 20 })
  @Column(DataType.TEXT)
  lastName: string;

  @Length({ min: 6, max: 30 })
  @Column(DataType.TEXT)
  password: string;

  @BeforeCreate
  static hashPassword(instance: User) {
    instance.password = bCrypt.hashSync(instance.password, 10);
    instance.id = uuidv4();
  }
}

User.prototype.toJSON =  function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
};
