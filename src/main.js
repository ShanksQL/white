import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Qs from 'qs' //传json数据的包

Vue.config.productionTip = false

import router from './lib/router'
Vue.prototype.axios = axios // 挂载到原型上
Vue.prototype.qs = Qs 


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
