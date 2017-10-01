<template lang="pug">
  div
    v-toolbar
      v-toolbar-title
        router-link(to="/") Forecast Weather App Demo
      v-spacer
      v-toolbar-side-icon.hidden-md-and-up
      v-toolbar-items.hidden-sm-and-down
          router-link(to="/forecast")
            .flat
              img.title-logo(src='src/assets/weather.png')
    .container.weather-container
      v-card.secondary.elevation-0
          v-card-text
              v-container
                v-layout.row
                  v-flex.xs4
                    v-subheader.grey--text.text--lighten-1 Enter City Name
                  |
                  v-flex.xs8
                    v-text-field.input-group--focused(v-model="cityName" @keyup="keymonitor" label='Enter a city name (i.e. Edinburgh, London, Glasgow)'  dark single-line)
      div(v-if='isReady')
        p.right
         strong results found: &nbsp;&nbsp;
         | {{forecastResults.city.name}}

        div(v-for='(value, key) in dateObject')
          br
          br
          h4 {{key}}
            small &nbsp;&nbsp;&nbsp;&nbsp;{{convertToDay(dateObject[key].dt_txt, "MMM Do YY")}}
          v-data-table.elevation-3(v-bind:headers='tableHeaders' :items='dateObject[key]' hide-actions)
              template(slot='items', scope='props')
                td.text-xs-right {{ convertToDay(props.item.dt_txt, 'hh:mm') }}
                td.text-xs-right(v-for='weather in props.item.weather') {{ weather.description }}
                td.text-xs-right {{props.item.main.humidity}}
                td.text-xs-right {{props.item.main.pressure}}
                td.text-xs-right {{ convertDegrees(props.item.main.temp) }}{{degreeType}}
                td.text-xs-right {{ convertDegrees(props.item.main.temp_max) }} / {{ convertDegrees(props.item.main.temp_min) }}{{degreeType}}
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
      dateObject: {},
      forecastResults: null,
      tableHeaders: [
        {text: 'Time', value: 'time'},
        {text: 'Description', value: 'description'},
        {text: 'Humidity', value: 'humidity'},
        {text: 'Pressure', value: 'pressure'},
        {text: 'Temperature', value: 'temp'},
        {text: 'Max / Min', value: 'maxmin'}
      ]
    }
  },
  created: function () {

  },
  methods: {
    async getForecast(cityName){
      try{
        let res = await this.$http.get(`/api/forecast/${cityName}`);
        //let res = await this.$http.get(`/src/assets/testdata.json`);
        this.forecastResults = res.body;
        this.dateObject = {};
        for (let item of res.body.list){
          let key = moment(item.dt_txt).format('dddd');
          if(!this.dateObject.hasOwnProperty(key)){
            this.dateObject[key] = []
          }
          this.dateObject[key].push(item)
        }
        this.isReady = true;
      } catch (reason) {

      }
    },
    keymonitor(event) {
      if(event.keyCode === 13){
        if(this.cityName.length > 0){
			    this.getForecast(this.cityName)
        }
      }
    },
    convertTemperature(){
      if(this.degreeType == '°F'){
        this.degreeType = '°C'
      } else {
        this.degreeType = '°F'
      }
      this.convertDegrees(this.degreeType)
    },
    convertDegrees(value){
      if(this.degreeType === '°C'){
        return Math.round(parseInt(value) - 273.15).toFixed(0);
      }
      if(this.degreeType === '°F'){
        return Math.round( parseInt(value) * 9/5 - 459.67 ).toFixed(0)
      }
    },
    convertToDay(value, format){
      return moment(value).format(format);
    }
  }
}
</script>


<style lang="sass" scoped>
  p
    color: darkorange

  .weather-container
      min-height: 1000px

  .title-logo
      width: 50px
      height: 50px
</style>
