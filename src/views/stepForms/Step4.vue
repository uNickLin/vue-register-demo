<template lang="pug">
  .step.step4
    h1 Payment method
    .form-group.card-number
      label Card Number
      .input-group
        el-input(
          placeholder='6666',
          v-model="cardNumber.card1",
          maxlength='4')
        el-input(
          placeholder='6666',
          v-model="cardNumber.card2",
          maxlength='4')
        el-input(
          placeholder='6666',
          v-model="cardNumber.card3",
          maxlength='4')
        el-input(
          placeholder='6666',
          v-model="cardNumber.card4",
          maxlength='4')
    .form-group.card-info
      .input-group
        label Cardholder Name
        el-input(
          v-model="cardholderName",
          clearable)
      .input-group
        label Bank Name
        el-input(
          v-model="bankName",
          clearable)
    .form-group.card-detail
      .input-group
        label CVV
        el-input(
          v-model="cardholderName",
          clearable)
      .input-group
        label Expire Date
        .expire-group
          el-input(
            v-model="bankName",
            clearable)
          el-input(
            v-model="bankName",
            clearable)
    .button-group
      button.button.is-small.is-success(@click="stepPass") Finish
</template>

<script>
  export default {
    name: 'Step4',
    data() {
        return {
          cardNumber: {
            card1: '',
            card2: '',
            card3: '',
            card4: ''
          },
          cardholderName: '',
          bankName: ''
        }
    },
    methods: {
      stepPass() {
        this.$emit('pass', 'step4')
      }
    },
    computed: {
      fullCardNumber() {
        return `${this.cardNumber.card1}-${this.cardNumber.card2}-${this.cardNumber.card3}-${this.cardNumber.card4}`
      }
    }
  }
</script>