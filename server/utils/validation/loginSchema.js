const { object, string } = require('yup');

const loginSchema = object({
  email: string().email().required(),
  password: string().required().min(8),
});

module.exports = loginSchema;
