import Vue from 'vue'
import VueBus from 'vue-bus'
import App from './App.vue'
import router from './router'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueBus)

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
