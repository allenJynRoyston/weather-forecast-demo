<template>
    <panel header="Page One" :is-open="true">
        Content of page-one
    </panel>
</template>

<script>
    import {panel} from 'vue-strap'
    export default {
        components: {
            panel
        },
        created: function () {
          this.bar()
        },
        methods: {
          async foo(){
            console.log( "Async works!" )
          },
          async bar(){
            await this.foo();
          }
        }
    }
</script>
