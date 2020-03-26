import { Environment } from '../enums/environment.enum';

const Joi = require('@hapi/joi');

const portRegex = () => /^([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;

export const configSchema = Joi.object({
  PORT: Joi.string().required().trim().regex(portRegex()),
  DB_NAME: Joi.string().required().trim(),
  DB_PASS: Joi.string().required().trim(),
  DB_HOST: Joi.string().required().trim(),
  DB_USERNAME: Joi.string().required().trim(),
  ENV: Joi.string().required().lowercase().trim().valid(Environment.Dev, Environment.Prod),
}).unknown();
