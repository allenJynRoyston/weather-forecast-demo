<template lang="pug">
  div
    label City Name:
    input(v-model="cityName" @change='getForecast(cityName)' placeholder="Enter a city name")

    button(@click='degreeType = "°F"') °F
    button(@click='degreeType = "°C"') °C

    div(v-if='isReady')
      div(v-for='(value, key) in dateObject')
        hr
        br
        h3 {{key}}
        table(style='width: 100%;')
          thead
            tr
              th Time
              th Weather
              th Humidity
              th Pressure
              th Temperature
              th Max / Min
          tbody
            tr(v-for='item in dateObject[key]')
              td {{ convertToDay(item.dt_txt) }}
              td(v-for='weather in item.weather') {{ weather.description }}
              td {{item.main.humidity}}
              td {{item.main.pressure}}
              td {{ convertDegrees(item.main.temp) }}{{degreeType}}
              td {{ convertDegrees(item.main.temp_max) }} / {{ convertDegrees(item.main.temp_min) }}{{degreeType}}

          br
          br
</template>

<script>

export default {
  name: 'forecast',
  data () {
    return {
      isReady: false,
      cityName: null,
      searchResults: null,
      degreeType: '°F',
      dateObject: {}
    }
  },
  created: function () {
    this.getForecast('london')
  },
  methods: {
    async getForecast(cityName){
      //console.log(cityName)
      try{
        let res = await this.$http.get(`/api/forecast/${cityName}`);
        //let res = await this.$http.get(`/src/assets/testdata.json`);
        this.dateObject = {};
        for (let item of res.body.list){
          let key = moment(item.dt_txt).format('dddd');
          if(!this.dateObject.hasOwnProperty(key)){
            this.dateObject[key] = []
          }
          this.dateObject[key].push(item)
        }
        console.log(this.dateObject)
        this.isReady = true;
      } catch (reason) {
        //alert.log('Search failed: check key or access ')
      }
    },
    convertDegrees(value){
      if(this.degreeType === '°C'){
        return Math.round(parseInt(value) - 273.15).toFixed(0);
      }
      if(this.degreeType === '°F'){
        return Math.round( parseInt(value) * 9/5 - 459.67 ).toFixed(0)
      }
    },
    convertToDay(value){
      return moment(value).format('dddd');
      //return moment(value).parse('dddd')
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
p
  color: orange
</style>
