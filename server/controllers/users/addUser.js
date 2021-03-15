const { hash } = require('bcrypt');
const { sign } = require('../../utils/jwt');
const { addUserQuery, checkEmail } = require('../../database/queries');
const { boomify } = require('../../utils');
const { addUserSchema } = require('../../utils/validation');

const addUser = async (req, res, next) => {
  try {
    const { userName, email, password } = await addUserSchema.validate(
      req.body,

      {
        abortEarly: false,
      }
    );
    const { rows: user } = await checkEmail({ email });
    if (user[0]) {
      return next(boomify(409, 'Login Error', 'You are already registered'));
    }
    const hashedPassword = await hash(password, 10);
    const { rows: data } = await addUserQuery(userName, email, hashedPassword);
    const { id: userId } = data[0];
    const token = await sign({ userId });
    return res
      .cookie('token', token, { httpOnly: true })
      .status(201)
      .json({ statusCode: 201, message: 'registered successfully', data });
  } catch (error) {
    return next(
      error.name === 'ValidationError'
        ? boomify(400, 'Validation Error', error.errors)
        : error
    );
  }
};

module.exports = addUser;
