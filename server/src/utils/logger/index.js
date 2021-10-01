const pino = require('pino');
const dayjs = require('dayjs');

const logger = pino({
  prettyPrint: process.env.NODE_ENV || 'development',
  // prettyPrint: true,
  // level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

module.exports = logger;

// const log = logger({
//   prettyPrint: true,
//   base: {
//     pid: false,
//   },
//   timestamp: () => `,"time":"${dayjs().format()}"`,
// });

// export default log;
