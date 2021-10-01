const router = require('express').Router();
const { protect, admin } = require('../../utils');
const {
  authUser,
  registerUser,
  getUserProfile,
  getUsers,
  deleteUser,
  updateUser
} = require('../../controllers/users');

router
  .route('/')
  .get(protect, admin, getUsers)
  .post(registerUser);

router
  .route('/:user_id')
  .delete(protect, admin, deleteUser);

router
  .post('/login', authUser);

router
  .route('/profile/:user_id')
  .put(protect, updateUser);

router
  .route('/profile')
  .get(protect, getUserProfile);

module.exports = router;
