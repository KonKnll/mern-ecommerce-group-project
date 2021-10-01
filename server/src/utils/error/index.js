const BaseError = require('./BaseError');
const handleError = require('./handleError');
const handleNotFound = require('./handleNotFound');
const handleMongoErrors = require('./handleMongoErrors');

module.exports = {
  BaseError,
  handleError,
  handleNotFound,
  handleMongoErrors,
};
