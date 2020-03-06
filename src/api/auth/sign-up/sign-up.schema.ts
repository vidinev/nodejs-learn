const Joi = require('@hapi/joi');

const passwordRegex = () => /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,30}$/;
const nickRegex = () => /^[A-Za-z][A-Za-z0-9_]{3,19}$/;
const nameRegex = () => /^[a-z'-]{2,20}$/i;

export const signUpSchema = Joi.object({
  email: Joi.string().email().required().trim(),
  nickname: Joi.string().required().trim().lowercase()
    .pattern(nickRegex())
    .label('Nickname should have 4 - 20 letters'),
  firstName: Joi.string().required().trim()
    .pattern(nameRegex())
    .label('First Name should have 2 - 20 letters'),
  lastName: Joi.string().required().trim()
    .pattern(nameRegex())
    .allow('').optional().allow(null)
    .label('Last Name should have 2 - 20 letters'),
  password: Joi.string().required().trim()
    .pattern(passwordRegex())
    .label('Password should have 6 - 30 symbols and contain uppercase, lowercase and digit'),
  phone: Joi.string().trim().min(3).max(20).optional().allow('').allow(null),
}).unknown();
