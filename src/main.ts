import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@sweco/sweco-digital-platforms/dist/css/sweco-bootstrap.css'
import '@sweco/sweco-digital-platforms/dist/js/sweco-bootstrap.js'
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
