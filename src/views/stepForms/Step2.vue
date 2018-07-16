<template lang="pug">
  .step.step2
    h1 General Information
    .form-group.name
      .input-group
        label First Name*
        input.input(
          type="text",
          v-model="firstName",
          name='firstName',
          v-validate="'required|alpha'",
          :class="{'input': true, 'is-danger': errors.has('firstName') }")
        span(
          v-show="errors.has('firstName')",
          class="help is-danger") {{ errors.first('firstName') }}

      .input-group
        label Last Name*
        input.input(
          type="text",
          v-model="lastName",
          name='lastName',
          v-validate="'required|alpha'",
          :class="{'input': true, 'is-danger': errors.has('lastName') }")

    .form-group
      label Phone*
      input.input(
          type="text",
          v-model="phone",
          name='phone',
          v-validate="{ required: true, regex: /^([0-9]+)$/ }",
          :class="{'input': true, 'is-danger': errors.has('phone') }")
      span(
        v-show="errors.has('phone')",
        class="help is-danger") {{ errors.first('phone') }}

    .form-group
      label Birthdate*
      el-date-picker(
        v-model="birthdate"
        type="date"
        placeholder="Pick Date")
    .form-group.address
      label Adress*
      .input-group
        el-select(
          size='small',
          v-model="address.city",
          @change='changeCity')
          el-option(
            v-for="city in cities",
            :key="city.ctName",
            :label="city.ctName",
            :value="city.ctName")
      .input-group
        el-select(
          size='small',
          :disabled='address.city === "" ? true : false',
          v-model="address.dist")
          el-option(
            v-for="dist in selectedDists",
            :key="dist",
            :label="dist",
            :value="dist")
      .input-group
        input.input(
          type="text",
          v-model="address.detail",
          name='addressDetail',
          v-validate="'required'",
          :class="{'input': true, 'is-danger': errors.has('addressDetail') }")

    .button-group
      button.button.is-small.is-info(
        @click="stepPass",
        :disabled='errors.items.length > 0 || !areAllFilled') Next
</template>

<script>
  export default {
    name: 'Step2',
    data() {
      return {
        firstName: '',
        lastName: '',
        phone: '',
        birthdate: '',
        address: {
          city: '',
          dist: '',
          detail: ''
        },
        cities: [
          {
            ctName: '台北市',
            dists: [
              '中正區', '中山區', '士林區', '大同區', '內湖區'
            ]
          },
          {
            ctName: '新北市',
            dists: [
              '蘆洲區', '三重區', '淡水區', '中和區', '永和區', '汐止區'
            ]
          },
          {
            ctName: '宜蘭縣',
            dists: [
              '羅東鎮', '三星鄉', '五結鄉', '冬山鄉'
            ]
          },
          {
            ctName: '宜蘭市',
            dists: [
              '礁溪鄉', '壯圍鄉', '員山鄉'
            ]
          },
          {
            ctName: '桃園市',
            dists: [
              '中壢區', '龜山區', '平鎮區', '大溪區'
            ]
          },
          {
            ctName: '新竹市',
            dists: [
              '東區', '北區', '香山區'
            ]
          }
        ]
      }
    },
    computed: {
      selectedDists() {
        if(this.address.city === '') return []
        return this.cities.find(city => city.ctName === this.address.city).dists
      },
      areAllFilled() {
        if (
          this.firstName && 
          this.lastName && 
          this.phone &&
          this.birthdate &&
          this.address.city &&
          this.address.dist &&
          this.address.detail
          ) return true
          return false
      }
    },
    watch: {
      birthdate(oldVal, newVal) {
        const dateFormat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
      }
    },
    methods: {
      changeCity() {
        this.address.dist = ''
      },
      stepPass() {
        this.$emit('pass', 'step2')
      }
    }
  }
</script>