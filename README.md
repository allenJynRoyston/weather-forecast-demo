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
$ npm run dev
```
- Browser should open automatically and will hot reload when making changes to components.  
<br>
** IMPORTANT:  when running locally, make sure you uncomment one line in src/components/Forecast.vue or you wont get any results back.**

```sh
let res = await this.$http.get(`/src/assets/testdata.json`);
```


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
- small final build at < 320kb (without images)
- fast
- parallax scrolling always look neat (even in mobile)
- mobile friendly 
- easy dev to deployment process

### Future Implementations
- Mobile optimization
- Server side rendering
- Image optimization
- Cleaner/more reliable webpack build
- Better visuals on Forecast page
- Unit testing
- Fahrenheit/Celcius conversion (actually built in, just didn't add it in time - damnit)
- More robust API
- Fix that damn footer
- Instantiate server seperate from the webpack build


### Additional stuff
- When running npm run builddev or buildserver, sometimes webpack will respond with a minification error.  I couldn't address it in time but everything still works just fine.

