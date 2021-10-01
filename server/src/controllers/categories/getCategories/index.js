// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { logger } = require('../../../utils');
const { Category } = require('../../../models');

/**
 * @description  Fetch all categories
 * @route        GET /api/categories
 * @access       Private/Admin
 */
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({}).populate({
    path: 'products',
    select: '_id name price description',
  });

  logger.info(`GET ALL ${categories.length} CATEGORIES`);
  res.json({
    total: categories.length,
    categories,
  });
});

module.exports = getCategories;
