const router = require('express').Router();
const { saveFile } = require('../../controllers/uploads');
// const { protect, admin } = require('../../utils');

router
  .route('/')
  .post(saveFile);

module.exports = router;
