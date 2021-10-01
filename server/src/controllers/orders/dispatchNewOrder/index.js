const { CREATED } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { logger } = require('../../../utils');
const { Order } = require('../../../models');

/**
 * @desc    Dispatch new order
 * @route   POST /api/orders
 * @access  Public
 */
const dispatchNewOrder = asyncHandler(async (req, res) => {
  const newOrder = await Order.create(req.body);

  logger.info(`NEW ORDER: ${newOrder.name}, id: ${newOrder._id} DISPATCHED`);

  res.status(CREATED).json({
    success: true,
    message: `new order with id: ${newOrder._id} dispatched`,
    newOrder: dispatchNewOrder,
  });
});

module.exports = dispatchNewOrder;
