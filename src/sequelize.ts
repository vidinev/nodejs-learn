import { Sequelize } from 'sequelize-typescript';
import { config } from './config';
import { User } from './models/user/user.model';

export const loshSequelize = new Sequelize({
  database: config.db.name,
  dialect: 'postgres',
  username: config.db.userName,
  password: config.db.pass,
  host: config.db.host,
  models: [User]
});

