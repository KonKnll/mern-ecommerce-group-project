const { UNAUTHORIZED } = require('http-status-codes');
const { BaseError } = require('../../error');

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return next(new BaseError(UNAUTHORIZED, 'Not authorized as an admin'));
  }
};

module.exports = admin;
