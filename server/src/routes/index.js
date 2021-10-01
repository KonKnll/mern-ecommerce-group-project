const router = require('express').Router();
const { BaseError } = require('../utils');

const apiRoutes = require('./api');

router.use(process.env.API_URL, apiRoutes);

router.use(process.env.API_URL, (req, res, next) =>
  next(new BaseError(404, `API route not found: ${req.originalUrl}`))
);

module.exports = router;
