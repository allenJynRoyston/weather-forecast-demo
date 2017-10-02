# Forecast Weatherapp Demo


### Preview
[Click here](https://vue-weather-forecast.herokuapp.com/)
<br>
*Could take a minute - the server sleeps when not in use*
 

### Install instructions:
```sh
$ git clone https://github.com/allenRoyston/weather-forecast-demo.git
$ cd weather-forecast-demo
$ npm install
$ gulp  
OR
$ npm run dev 
```

### Okay, but why Gulp?
We're using Webpack, so why do we even need Gulp?  Well an interesting problem came up when I was trying to access an endpoint in my server.js file.  The route (api/forecast/:city) is only available when the server is running, and when using webpack the server.js file is never intialized.  In otherwords, to access the server AND utilize the benefits of webpack, they both need to be running.  Gulp will ensure that the server is started first and then watch for changes that in effect, trigger webpack to rebuild.  The browser will then automatically reload.

The cons of this approach are that Webpack builds are extremly slow - usually around 6-10 seconds.  If you don't need to mess with the endpoints (or want to use mock data instead), then running *npm run dev* will ONLY start webpack and it's hotloading.  It's much faster and is recommended when building out components.  


### Predeployment instructions:
```sh
$ npm install
$ npm run builddev
$ npm run buildserver
$ npm start  
```

### Heroku Deployment:
```sh
$ npm install
$ npm run builddev
$ npm run buildserver
$ git push heroku master
```

### Things that went well
- small final build at < ~~320kb~~ 263kb (without images)
- fast
- parallax scrolling always look neat (even in mobile)
- mobile friendly 
- easy dev to deployment process

### Optimization Score
https://gtmetrix.com/reports/vue-weather-forecast.herokuapp.com/UqajhjGM

### Future Implementations
- Mobile optimization
- ~~Server side rendering~~ I think this works now... *shrug*
- Image optimization
- ~~Cleaner/more reliable webpack build~~
- ~~Better visuals on Forecast page~~
- Unit testing
- ~~Fahrenheit/Celcius conversion (actually built in, just didn't add it in time - damnit)~~
- More robust API
- ~~Fix that damn footer~~
- ~~Instantiate server seperate from the webpack build~~


### Additional stuff
- ~~When running npm run builddev or buildserver, sometimes webpack will respond with a minification error.  There's still issues with Babels being unable to minifying some ES6 features.  Will need to wait for a patch before being able to resolve this. https://github.com/mishoo/UglifyJS2/issues/448~~  FIXED BECAUSE I'M AWESOME

