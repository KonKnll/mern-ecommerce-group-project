const { NOT_FOUND } = require('http-status-codes');
const BaseError = require('./BaseError');

const handleNotFound = (req, res, next) => {
  next(new BaseError(NOT_FOUND, `Endpoint not found ${req.originalUrl}`));
};

module.exports = handleNotFound;
