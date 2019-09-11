import Vue from 'vue'
import App from './App.vue'
import BootstapVue from 'bootstrap-vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import '../css/main.css'


Vue.use(BootstapVue);
Vue.use(KsVueScrollmagic);

new Vue({
  el: '#app',
  render: h => h(App)
})