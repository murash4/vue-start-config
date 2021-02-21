import Vue from 'vue'
import VueBus from 'vue-bus'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { numberWithSeparator } from '@/helpers/numbers'

Vue.config.productionTip = false

Vue.use(VueBus)
Vue.filter('with_separator', numberWithSeparator)

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
