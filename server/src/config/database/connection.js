const mongoose = require('mongoose');
const { logger } = require('../../utils');

const databaseConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger.info(`Database connected: ${conn.connection.host}`, '\n');
  } catch (err) {
    logger.error(`Database connection error: ${err.message}, ${err}`);
    process.exit(1);
  }
};

module.exports = databaseConnection;
