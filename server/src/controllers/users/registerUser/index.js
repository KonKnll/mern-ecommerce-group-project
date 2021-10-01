const { BAD_REQUEST } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger, generateToken } = require('../../../utils');
const { User } = require('../../../models');

/**
 * @description  Register a new user
 * @route        POST /api/users
 * @access       Public
 */
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new BaseError(BAD_REQUEST, 'User already exists'));
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (!user) {
    return next(new BaseError(BAD_REQUEST, 'Invalid user data'));
  }

  logger.info(
    `USER CREATED with id: ${user._id}, name: ${user.name}, email: ${user.email}, admin: ${user.isAdmin}`
  );
  res.status(201).json({
    success: true,
    message: 'User created',
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    },
  });
});

module.exports = registerUser;
