<template lang="pug">
  .register
    el-steps(:active="active" finish-status="success")
      el-step(title="")
      el-step(title="")
      el-step(title="")
      el-step(title="")
    component(
      :is='currentStep',
      @pass='next')
    
</template>

<script>
  import Step1 from './stepForms/Step1.vue'
  import Step2 from './stepForms/Step2.vue'
  import Step3 from './stepForms/Step3.vue'
  import Step4 from './stepForms/Step4.vue'

  export default {
    name: 'Register',
    components: {
      Step1, Step2, Step3, Step4
    },
    data() {
      return {
        currentStep: 'Step1',
        active: 0
      }
    },
    methods: {
      next(step) {
        if (step === 'step1') this.currentStep = 'Step2'
        else if (step === 'step2') this.currentStep = 'Step3'
        else if (step === 'step3') this.currentStep = 'Step4'
        
        if (this.active < 4) this.active++
      }
    }
  }
</script>