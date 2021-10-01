// const { StatusCodes } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { logger } = require('../../../utils');
const { Product } = require('../../../models');

/**
 * @description  Fetch all products
 * @route        GET /api/products
 * @access       Public
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  logger.info(`GET ALL ${products.length} PRODUCTS`);
  res.json({
    success: true,
    total: products.length,
    products,
  });
});

module.exports = getProducts;
