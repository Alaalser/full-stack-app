const { string, object, ref } = require('yup');

const addUserSchema = object({
  userName: string().min(4).required(),
  email: string().email().required(),
  password: string().min(8).required(),
  confirmPassword: string()
    .oneOf([ref('password'), null])
    .required(),
});

module.exports = addUserSchema;
