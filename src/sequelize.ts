import Sequelize from 'sequelize';
import { config } from './config';

export const loshSequelize = new (Sequelize as any)(
  config.db.name,
  config.db.userName,
  config.db.pass,
  {
    host: config.db.host,
    dialect: 'postgres'
  });

