const asyncHandler = require('express-async-handler');
const { logger } = require('../../../utils');
const { User } = require('../../../models');

/**
 * @description  Fetch all users
 * @route        GET /api/users
 * @access       Private/Admin
 */
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  logger.info(`GET ALL ${users.length} USERS`);
  res.json({
    success: true,
    total: users.length,
    users,
  });
});

module.exports = getUsers;
