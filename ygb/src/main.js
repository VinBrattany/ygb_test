import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'
import initMint from './utils/initMint'
import initImagePreviewer from './utils/initImagePreviewer'

Vue.config.productionTip = false

initMint(Vue)
initImagePreviewer(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
