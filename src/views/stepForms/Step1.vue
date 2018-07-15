<template lang="pug">
  .step.step1
    h1 Create Account
    .form-group
      label Account
      input.input(
        type="email",
        placeholder="example@mail.com",
        v-model="account",
        v-validate="'required|email'",
        name="email",
        :class="{'input': true, 'is-danger': errors.has('email') }")
      span(
        v-show="errors.has('email')",
        class="help is-danger") {{ errors.first('email') }}

    .form-group
      label Password
      input(
        type="password",
        v-model="password",
        name='password',
        v-validate="'required|min: 6'",
        ref='password',
        :class="{'input': true, 'is-danger': errors.has('password') }")
      span(
        v-show="errors.has('password')",
        class="help is-danger") {{ errors.first('password') }}

    .form-group
      label Confirm Password
      input(
        type="password",
        v-model="passwordConfirm",
        name='passwordConfirm',
        v-validate="{required: true, confirmed: password}",
        :class="{'input': true, 'is-danger': errors.has('passwordConfirm') }")
      span(
        v-show="errors.has('passwordConfirm')",
        class="help is-danger") {{ errors.first('passwordConfirm') }}


    .button-group
      button.button.is-small.is-info(
        @click="stepPass",
        :disabled='errors.items.length > 0 || !areAllFilled') Next

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
    },
    computed: {
      areAllFilled() {
        if (this.account && this.password && this.passwordConfirm) return true
        return false
      }
    }
  }
</script>
