const router = require('express').Router();

const productsRoutes = require('./products');
const categoriesRoutes = require('./categories');
const usersRoutes = require('./users');
const ordersRoutes = require('./orders');
const uploadsRoutes = require('./uploads');

router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/users', usersRoutes);
router.use('/orders', ordersRoutes);
router.use('/uploads', uploadsRoutes);

module.exports = router;
