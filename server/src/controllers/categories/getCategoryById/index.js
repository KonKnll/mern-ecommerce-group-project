// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger } = require('../../../utils');
const { Category } = require('../../../models');

/**
 * @description  Fetch single category
 * @route        GET /api/categories/:category_id
 * @access       Public
 */
const getCategoryById = asyncHandler(async (req, res, next) => {
  const { category_id } = req.params;
  const fetchCategory = await Category.findById(category_id).populate({
    path: 'products',
    select: '_id name price description',
  });

  if (!fetchCategory) {
    return next(
      new BaseError(404, `Category with id: ${category_id} not found`)
    );
  }

  logger.info(
    `GET Category: ${fetchCategory.name}, ID: ${fetchCategory._id}, DESC: ${fetchCategory.description}, PRODUCTS: ${fetchCategory.products}`
  );

  res.status(200).json({
    success: true,
    fetchCategory,
  });
});

module.exports = getCategoryById;
