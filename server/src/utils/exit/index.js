const logger = require('../logger');

const handleExit = (event) => {
  return (error) => {
    if (error !== undefined) {
      logger.error(error.stack);
    }
    logger.info(event);
    process.exit();
  };
};

module.exports = handleExit;
