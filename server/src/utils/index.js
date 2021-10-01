const {
  BaseError,
  handleError,
  handleNotFound,
  handleMongoErrors,
} = require('./error');
const { protect, admin, generateToken } = require('./auth');
const logger = require('./logger');
const handleExit = require('./exit');

module.exports = {
  BaseError,
  handleError,
  handleNotFound,
  protect,
  admin,
  logger,
  generateToken,
  handleExit,
  handleMongoErrors,
};
