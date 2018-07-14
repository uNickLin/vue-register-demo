import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/zh-TW'
import locale from 'element-ui/lib/locale'
import { Steps, Step, Select, Option, Input, DatePicker } from 'element-ui';
import App from './App.vue'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'


locale.use(lang)

Vue.use(Steps)
Vue.use(Step)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(DatePicker)

Vue.component('ImgInputer', ImgInputer)

new Vue({
  el: '#app',
  render: h => h(App)
})
