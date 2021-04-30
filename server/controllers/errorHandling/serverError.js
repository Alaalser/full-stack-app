const { boomify } = require('../../utils');

const serverError = (err, req, res, next) => {
  const errorMessage = err.statusCode
    ? err
    : boomify(500, 'internal Server Error', 'Something went wrong');
  res.status(err.statusCode || 500).json(errorMessage);
  console.log(err);
};

module.exports = serverError;
