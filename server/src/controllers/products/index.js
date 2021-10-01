const getProducts = require('./getProducts');
const getProductById = require('./getProductById');
const getProductBySlug = require('./getProductBySlug');
const createProduct = require('./createProduct');
const deleteProduct = require('./deleteProduct');
const updateProduct = require('./updateProduct');

module.exports = {
  getProducts,
  getProductById,
  getProductBySlug,
  createProduct,
  deleteProduct,
  updateProduct,
};
