const { CREATED } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { logger } = require('../../../utils');
const { Category } = require('../../../models');

/**
 * @desc    Create a category
 * @route   POST /api/categories
 * @access  Private/Admin
 */
const createCategory = asyncHandler(async (req, res) => {
  const newCategory = await Category.create(req.body);

  logger.info(
    `NEW CATEGORY: ${newCategory.name}, id: ${newCategory._id} CREATED`
  );

  res.status(CREATED).json({
    success: true,
    message: 'new category created',
    newCategory,
  });
});

module.exports = createCategory;
