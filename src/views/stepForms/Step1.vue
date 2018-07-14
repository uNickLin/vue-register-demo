<template lang="pug">
  .step.step1
    h1 Create Account
    .form-group
      label Account
      el-input(
        placeholder="example@mail.com",
        v-model="account",
        clearable)

    .form-group
      label Password
      el-input(
        type='password',
        v-model="password",
        clearable)

    .form-group
      label Confirm Password
      el-input(
        type='password',
        v-model="passwordConfirm",
        clearable)

    .button-group
      button.button.is-small.is-info(@click="stepPass") Next

</template>

<script>
  export default {
    name: 'Step1',
    data() {
      return {
        account: '',
        password: '',
        passwordConfirm: ''
      }
    },
    methods: {
      stepPass() {
        this.$emit('pass', 'step1')
      }
    }
  }
</script>
