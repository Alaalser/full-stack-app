const { object, string } = require('yup');

const loginSchema = object({
  email: string().email().required(),
  password: string().required(),
});

module.exports = loginSchema;
