<template lang='pug'>
  #app
    register

</template>

<script>
import Register from './views/Register'
export default {
  name: 'app',
  components: {
    Register
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
