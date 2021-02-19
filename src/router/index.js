import Vue from 'vue'
import VueRouter from 'vue-router'
import Levels from '../views/stats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Levels
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
