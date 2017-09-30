// required packages
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const compression = require('compression');
const router = express.Router();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
app.use(compression())
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/icons', express.static(__dirname + '/icons/'));

// set favicon
app.use(favicon(path.join(__dirname, 'favicon/', 'favicon.ico')))

// set cache headers
app.use(function (req, res, next) {
  let day = (86400000 / 1000),
      numberOfDays = 7;
  if (!res.getHeader('Cache-Control')) res.setHeader('Cache-Control', 'public, max-age=' + (day * numberOfDays));
  next()
})

// webpack configuration
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));


// Serve the files on port 3000.
app.listen(process.env.PORT || 3000)
