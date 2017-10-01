<template lang="pug">
  div
    v-footer.blue.darken-2
      v-layout(row='', wrap='', align-center='')
        v-flex(xs12='')
          .white--text.ml-3
            | Made with
            v-icon.red--text favorite
            a.white--text(href='mailto:allen.royston.uk@gmail.com') Allen Royston
</template>

<script>
export default {
  name: 'main-footer',
  data () {
    return {

    }
  },
  created: function () {

  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>

</style>
