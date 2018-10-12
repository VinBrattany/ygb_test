import Vue from 'vue'
import Vuex from 'vuex'
import serviceApplication from './modules/serviceApplication'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    serviceApplication
  },
  strict: debug
})
