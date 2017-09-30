<template lang="pug">
  div
    .hello
      h1 Hello World!
      h2 It works!
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Hello World'
    }
  },
  created: function () {
    this.bar();
  },
  methods: {
    async foo(){
      console.log( "Async works in Hello!" )
    },
    async bar(){
      await this.foo();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.hello
  h1
    color: blue
  h2
    color: red

</style>
