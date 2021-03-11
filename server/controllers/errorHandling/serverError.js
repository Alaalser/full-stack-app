const boomify = require('../../../utils');

const serverError = (err, req, res, next) => {
  const errorMessage = err.statusCode
    ? err
    : boomify(500, 'internal Server Error', 'Something went wrong');

  res.status(res.statusCode || 500).json(errorMessage);
};

module.exports = serverError;
