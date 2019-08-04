import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import EventBus from './plugins/event-bus'
import msToMm from './filters/ms-to-mm'
import blur from './directives/blur'

Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
