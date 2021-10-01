const { OK, NOT_FOUND } = require('http-status-codes');
const asyncHandler = require('express-async-handler');
const { logger } = require('../../../utils');
const { Order } = require('../../../models');
/*
 * @desc    Get single order by id
 * @route   GET /api/orders/:id
 * @access  Private
 **/
const getOrderById = asyncHandler(async (req, res) => {
  const { order_id } = req.params;
  const order = await Order.findById(order_id).populate('user', 'name email');

  if (order) {
    res.status(OK).json({
      success: true,
      message: `Order with id: ${order._id} fetched`,
      order,
    });
  } else {
    res.status(NOT_FOUND);
    throw new Error(`Order with id: ${order._id} not found`);
  }
});

module.exports = getOrderById;
