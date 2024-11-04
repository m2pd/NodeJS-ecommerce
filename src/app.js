const express = require('express');
const morgan = require('morgan');
const app = express();
const helmet = require('helmet');
const compression = require('compression');

//init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
//init db

//init router
app.get('/', (req, res, next) => {
  const strCompress = 'Hello FanTipJS';
  return res.status(200).json({
    message: 'Welcome FanTipJS',
    metadata: strCompress.repeat(10000),
  });
});
//handler error

module.exports = app;
