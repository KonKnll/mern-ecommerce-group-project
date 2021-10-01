const { NOT_FOUND, OK } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { logger, BaseError } = require('../../../utils');
const { User } = require('../../../models');
const bcrypt = require('bcryptjs');

/**
 * @desc    Update a user
 * @route   POST /api/users/profile/:id
 * @access  Private/Admin
 */
const createUser = asyncHandler(async (req, res, next) => {
  const { user_id } = req.params;
  const user = await User.findByIdAndUpdate(user_id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new BaseError(NOT_FOUND, `User with id: ${user_id} not found`));
  }

  logger.info(`USER with name: ${user.name}, email: ${user.email} UPDATED`);

  res.status(OK).json({
    success: true,
    message: `User: ${user.name} updated`,
    data: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      password: bcrypt.hashSync(user.password, 10), // to-fix: den doulevei to hash tou pass meta to update, den kanei match
    },
  });
});

module.exports = createUser;
