const router = require('express').Router();
const { protect, admin } = require('../../utils');
const {
  getCategories,
  getCategoryById,
  createCategory,
  addToCategory,
  removeFromCategory
} = require('../../controllers/categories');

router
  .route('/')
  .get(getCategories)
  .post(protect, admin, createCategory);

router
  .route('/:category_id')
  .get(getCategoryById);

router
  .route('/add')
  .post(addToCategory);

router
  .route('/remove')
  .post(removeFromCategory);

module.exports = router;
