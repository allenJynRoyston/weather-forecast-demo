# Forecast Weatherapp Demo


### Preview
[Click here](https://vue-weather-forecast.herokuapp.com/)
<br>
*Could take a minute - the server sleeps when not in use*
 
Install instructions:
```sh
$ git clone https://github.com/allenRoyston/weather-forecast-demo.git
$ cd weather-forecast-demo
$ npm install
$ npm run dev
```
- Browser should open automatically and will hot reload when making changes to components.  
<br>
** IMPORTANT:  when running locally, make sure you uncomment one line in src/components/Forecast.vue or you wont get any results back.**
```sh
 //let res = await this.$http.get(`/src/assets/testdata.json`);
```


Pre Deployment Instructions:
```sh
$ npm install
$ npm run builddev
$ npm run buildserver
$ npm start  
```

If using Heroku:
```sh
$ npm install
$ npm run builddev
$ npm run buildserver
$ git push heroku master
```

### Additional stuff
- When running npm run builddev or buildserver, sometimes webpack will respond with a minification.  Just ignore it; it seems to be a bug with the current version I have installed.  

