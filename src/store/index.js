import Vue from 'vue'
import Vuex from 'vuex'
import levels from './modules/levels'
import user from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    levels,
    user
  }
})

export default { store }
