import { Environment } from '../enums/environment.enum';

const Joi = require('@hapi/joi');

const portRegex = () => /^([1-9]|[1-5]?[0-9]{2,4}|6[1-4][0-9]{3}|65[1-4][0-9]{2}|655[1-2][0-9]|6553[1-5])$/;
const dbNameRegex = () => /^[a-zA-Z0-9_]{4,50}$/;
const hostRegex = () =>
  /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

export const configSchema = Joi.object({
  PORT: Joi.string().required().trim().regex(portRegex()),
  DB_NAME: Joi.string().required().trim().min(2).max(64),
  DB_PASS: Joi.string().required().trim().min(2).max(64),
  DB_HOST: Joi.string().required().trim().regex(hostRegex()),
  DB_USERNAME: Joi.string().required().trim().regex(dbNameRegex()),
  JWT: Joi.string().required(),
  ENV: Joi.string().required().lowercase().trim().valid(Environment.Dev, Environment.Prod),
}).unknown();
