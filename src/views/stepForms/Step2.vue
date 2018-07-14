<template lang="pug">
  .step.step2
    h1 General Information
    .form-group.name
      .input-group
        label First Name*
        el-input(
          v-model="firstName",
          clearable)
      .input-group
        label Last Name*
        el-input(
          v-model="lastName",
          clearable)
    .form-group
      label Phone*
      el-input(
        placeholder='0987654321'
        v-model="phone",
        clearable)
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
          v-model="address.city")
          el-option(
            v-for="city in cities",
            :key="city.ctName",
            :label="city.ctName",
            :value="city.ctName")
      .input-group
        el-select(
          size='small',
          :disabled='selectedCity === "" ? true : false',
          v-model="address.dist")
          el-option(
            v-for="dist in selectedDists",
            :key="dist",
            :label="dist",
            :value="dist")
      .input-group

    .button-group
      button.button.is-small.is-info(@click="stepPass") Next
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
        selectedCity: '',
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
        if(this.selectedCity === '') return []
      }
    },
    methods: {
      stepPass() {
        this.$emit('pass', 'step2')
      }
    }
  }
</script>