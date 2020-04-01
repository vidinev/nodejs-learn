import { Environment } from '../enums/environment.enum';
import { configSchema } from './config.schema';

require('dotenv-safe').config();

const { error, value } = configSchema.validate(process.env);

if (error) {
  throw new Error(error);
}

export const config =  {
  port: value.PORT || '3000',
  db: {
    name: value.DB_NAME,
    userName: value.DB_USERNAME,
    pass: value.DB_PASS,
    host: value.DB_HOST
  },
  jwtSecret: value.JWT,
  env: value.ENV || Environment.Dev
};
