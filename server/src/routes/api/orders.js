const router = require('express').Router();
const { protect, admin } = require('../../utils');
const {
  getOrders,
  getOrderById,
  deleteOrder,
  dispatchNewOrder,
} = require('../../controllers/orders/index');

router
  .route('/')
  .get(protect, admin, getOrders)
  .post(dispatchNewOrder);

router
  .route('/:order_id')
  .get(protect, getOrderById)
  .delete(protect, admin, deleteOrder);

module.exports = router;
