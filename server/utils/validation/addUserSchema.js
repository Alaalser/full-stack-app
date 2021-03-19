const { string, object, ref } = require('yup');

const addUserSchema = object({
  userName: string()
    .min(4, 'User name must be at least 4 char')
    .required('User Name is required'),
  email: string().email().required('email Name is required'),
  password: string()
    .min(8, 'Password must be at least 8 char')
    .required('Password is required'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords are not match')
    .required('confirmPassword is required'),
});

module.exports = addUserSchema;
