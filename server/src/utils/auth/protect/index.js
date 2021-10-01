const { UNAUTHORIZED } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const { BaseError } = require('../../error');
const { User } = require('../../../models');

const protect = asyncHandler(async (req, res, next) => {
  // eslint-disable-next-line init-declarations
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select('-password');
  } else {
    return next(new BaseError(UNAUTHORIZED, 'Not authorized, no token'));
  }

  next();
});

module.exports = protect;
