'use strict';

require('dotenv').config({ path: 'server/src/config/.env' });
const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const databaseConnection = require('./config/database/connection');
const {
  logger,
  handleError,
  handleNotFound,
  handleExit,
  handleMongoErrors,
} = require('./utils');

databaseConnection();

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const limiter = {
  windowMs: 1 * 60 * 1000,
  max: 25,
  message: 'Too many requests, please try again later.',
};

const uploadConfig = {
  limits: { fileSize: 50 * 1024 * 1024 },
  useTempFiles: true,
  tempFileDir: '/tmp/',
};

// const origin = {
//   origin: isProduction
//     ? 'https://www.deployment-url.com'
//     : 'http://localhost:5000/',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

const app = express();

if (isDevelopment) {
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '/public')));
}

if (isProduction) {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'build', 'index.html'));
    // res.sendFile(path.join(__dirname, '../../client/public/index.html'));
  });
}

app.use(helmet());
app.use(cors());
// app.use(cors(origin));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload(uploadConfig));
app.use(mongoSanitize());
app.use(compression());
app.use(rateLimit(limiter));
app.use(xss());

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const routes = require('./routes'); // routes/api/

app.use(routes, handleNotFound);

app.use(handleExit);
app.use(handleMongoErrors);
app.use(handleError);

// module.exports = app;

const PORT = process.env.PORT || 5000;

const sKey = fs.readFileSync(path.join(__dirname, 'config/cert', 'key.pem'));
const sCert = fs.readFileSync(path.join(__dirname, 'config/cert', 'cert.pem'));

const server = http.createServer(app);

// const sslServer = https.createServer({ sKey, sCert }, app);
// sslServer.listen(5445, () => logger.info('Secure server on port "5445"'));

const io = require('socket.io')(
  server,
  // sslServer,
  {
    cors: { origin: '*', methods: ['GET', 'POST'] },
  }
);

io.on('connection', (socket) => {
  logger.warn('A user connected');
  socket.on('message', ({ name, message }) => {
    logger.warn('A user disconnected');
    logger.info(`Name: ${name}`);
    logger.info(`Message: ${message}`);
    io.emit('message', { name, message });
  });
});

server.listen(PORT, () => {
  // sslServer.listen(PORT, () => {
  logger.info(`Listening on PORT: ${PORT}`);
  if (process.send !== undefined) {
    logger.info('Process ready');
    process.send('ready');
  }

  process.on('exit', handleExit('exit'));
  process.on('SIGINT', handleExit('SIGINT'));
  process.on('SIGTERM', handleExit('SIGTERM'));
  process.on('uncaughtException', handleExit('uncaughtException'));
  process.on('uncaughtRejection', handleExit('uncaughtRejection'));
});
