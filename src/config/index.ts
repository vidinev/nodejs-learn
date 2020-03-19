import { Environment } from '../enums/environment.enum';

require('dotenv-safe').config();

export const config =  {
  port: process.env.PORT || '3000',
  db: {
    name: process.env.DB_NAME,
    userName: process.env.DB_USERNAME,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST
  },
  env: process.env.ENV || Environment.Dev
};
