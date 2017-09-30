<template lang='pug'>
  #app
    main-header
    img(src="./assets/logo.png")
    br
    a
      router-link(to="/") Home
    a
      router-link(to="/forecast") Forecast
    br
    router-view
</template>

<script>
import MainHeader from './components/MainHeader.vue'

export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>

<style lang='css'>
  @import './assets/vuetify.min.css';
</style>

<style lang='scss' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
