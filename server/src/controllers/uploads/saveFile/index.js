const path = require('path');
const asyncHandler = require('express-async-handler');
const { logger, BaseError } = require('../../../utils');

/**
 * @desc    Upload a file
 * @route   POST /api/uploads
 * @access  Public
 */

const saveFile = asyncHandler(async (req, res, next) => {
  if (req.files === null) {
    return next(new BaseError(400, 'No file uploaded!'));
  }

  logger.info(req.files);

  // const toObject = JSON.parse(req.files);
  // logger.info(toObject);

  const file = req.files.file;

  logger.info(file);

  // const uploadPath = path.join(__dirname, '/client/public/uploads', file.name);

  // file.mv(uploadPath, (err) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     logger.error(err);
  //     return res.status(500).send(err);
  //   }
  // });

  // res.json({ success: true, message: 'File Uploaded!' });
});

module.exports = saveFile;
