<template lang='pug'>
  #app
    router-view
    v-footer.blue.darken-2
      v-layout.row.wrap.align-center
        v-flex.xs12
          .white--text.ml-3
            | Made with
            v-icon.red--text favorite
            a.white--text(href='mailto:allen.royston.uk@gmail.com') Allen Royston
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>


<style lang='css'>
  @import './assets/vuetify.min.css';
</style>

<style lang='scss'>
#app {
   a {
     cursor: pointer!important;
     text-decoration: none!important
   }
}
</style>
