// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { logger, BaseError } = require('../../../utils');
const { Product } = require('../../../models');

/**
 * @desc    Update a product
 * @route   POST /api/products/:id
 * @access  Private/Admin
 */
const updateProduct = asyncHandler(async (req, res, next) => {
  const { product_id } = req.params;
  const product = await Product.findByIdAndUpdate(product_id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new BaseError(404, `Product with id: ${product_id} not found`));
  }

  logger.info(`PRODUCT: ${product.name}, ID: ${product._id} UPDATED`);

  res.status(200).json({
    success: true,
    product,
  });
});

module.exports = updateProduct;
