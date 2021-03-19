const { object, string } = require('yup');

const loginSchema = object({
  email: string().email().required(),
  password: string().required().min(8, 'Password must be at least 8 char'),
});

module.exports = loginSchema;
