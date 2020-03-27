const Joi = require('@hapi/joi');

export const loginSchema = Joi.object({
  email: Joi.string().email().required().trim(),
  password: Joi.string().required().trim().min(3).max(30).label('Invalid password')
}).unknown();
