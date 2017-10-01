const express = require('express')
const request = require('request')
const fs = require('fs')
const path = require('path')
const bundle = fs.readFileSync(path.join(__dirname, './dist/server.js'), 'utf8')
const renderer = require('vue-server-renderer').createBundleRenderer(bundle)
const index = fs.readFileSync(path.join(__dirname, './index.html'), 'utf8')
const compression = require('compression');
const app = express()

// I'M SO EXPOOOSEED!!!
const openWeatherAppKey = "661e80346d232c78158726c9b7b62524";


// setup compression
app.use(compression())

// set cache headers
app.use(function (req, res, next) {
  let day = (86400000 / 1000),
      numberOfDays = 7;
  if (!res.getHeader('Cache-Control')) res.setHeader('Cache-Control', 'public, max-age=' + (day * numberOfDays));
  next()
})

// read from folder /dist
app.use('/src', express.static(path.join(__dirname, './src')))
app.use('/dist', express.static(path.join(__dirname, './dist')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

// for live data
app.get('/api/forecast/:city', (req, res) => {
  request("http://api.openweathermap.org/data/2.5/forecast?q=" + req.params.city + "&mode=json&appid=" + openWeatherAppKey, function (error, response, body) {
    res.send(JSON.parse(body))
  })
})

app.get('*', (req, res) => {
    renderer.renderToString({},
        (err, html) => {
          try{
            res.send(index.replace('<div id="app"></div>', html))
          }
          catch (err) {
            return res.sendStatus(500)
          }
        }
    )
})


// Serve the files on port 3000.
app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port ' + (process.env.PORT || 3000) + '\n' );
});
