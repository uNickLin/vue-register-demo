<template lang="pug">
  form.register
    h1 Register
    p {{msg}}
    input(type="text", placeholder='Password')
    steps(:current='0' type='line' prev-text='上一步' next-text='下一步')
      step(title='標題' description='舉頭望明月')
        p 第一題
      step(title='Eating' description='春曉')
        p 第二題
      step(title='Swimming' description='春眠不覺曉')
        p 第三題


</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        msg: 'form'
      }
    }
  }
</script>