const { NOT_FOUND, OK } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger } = require('../../../utils');
const { User } = require('../../../models');

/**
 * @desc    Delete a user
 * @route   DELETE /api/user/
 * @access  Private/Admin
 */
const deleteUser = asyncHandler(async (req, res, next) => {
  const { user_id } = req.params;
  const user = await User.findById(user_id);

  if (!user) {
    return next(new BaseError(NOT_FOUND, 'User not found'));
  }

  logger.info(`USER: ${user.name} ${user._id} DELETED!`);
  await user.remove();

  res.status(OK).json({
    success: true,
    message: `User with name: ${user.name} email: ${user.email} removed`,
    data: {},
  });
});

module.exports = deleteUser;
