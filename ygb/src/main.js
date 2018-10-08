import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'
import initMint from './utils/initMint'

Vue.config.productionTip = false

initMint(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
