const { NOT_FOUND, OK } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { BaseError, logger } = require('../../../utils');
const { Product } = require('../../../models');

/**
 * @description  Fetch single products
 * @route        GET /api/products/:id
 * @access       Public
 */
const getProductBySlug = asyncHandler(async (req, res, next) => {
  const { slug } = req.params;
  const [product] = await Product.find({ slug });

  if (!product) {
    return next(
      new BaseError(NOT_FOUND, `Product with slug: ${product.slug} not found`)
    );
  }

  logger.info(
    `GET Product: ${product.name}, ID: ${product._id}, CATEGORY: ${product.category}, DESC: ${product.description}`
  );

  res.status(OK).json({
    success: true,
    product,
  });
});

module.exports = getProductBySlug;
