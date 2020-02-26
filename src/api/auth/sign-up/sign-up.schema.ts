const Joi = require('@hapi/joi');

export const signUpSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string()
    .pattern(new RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,30}$'))
    .label('Password should have 6 - 30 symbols and contain uppercase, lowercase and digit'),
}).unknown();
