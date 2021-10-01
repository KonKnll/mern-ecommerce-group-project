// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger } = require('../../../utils');
const { Category } = require('../../../models');

/**
 * @description  Add product to a category
 * @route        GET /api/categories/:category_id/:product_id
 * @access       Private/Admin
 */
const addToCategory = asyncHandler(async (req, res, next) => {
  const { category_id, product_id } = req.body;
  const modifiedCategory = await Category.findByIdAndUpdate(category_id, {
    $addToSet: { products: product_id }, // ? $push
  }).populate({
    path: 'products',
    select: '_id name price',
  });

  if (!modifiedCategory) {
    return next(
      new BaseError(404, `Category with id: ${category_id} not found`)
    );
  }

  logger.info(
    `GET Category: ${modifiedCategory.name}, ID: ${modifiedCategory._id}, DESC: ${modifiedCategory.description}, PRODUCTS: ${modifiedCategory.products}`
  );

  res.status(200).json({
    success: true,
    modifiedCategory,
  });
});

module.exports = addToCategory;
