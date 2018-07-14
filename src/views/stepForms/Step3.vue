<template lang="pug">
  .step.step3
    h1 Update avatar
    .form-group
      img-inputer(
        v-model="file",
        theme="light",
        size="large",
        placeholder='點擊或拖曳上傳',
        bottom-text='點擊或拖拽圖片以修改')
    .button-group
      button.button.is-small.is-info(@click="stepPass") Next
</template>

<script>
  export default {
    name: 'Step3',
    data() {
      return {
        file: ''
      }
    },
    methods: {
      stepPass() {
        this.$emit('pass', 'step3')
      }
    }
  }
</script>