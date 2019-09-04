// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import {Button, Layout, Icon, Row, Col, Pagination} from 'ant-design-vue'

Vue.use(VueAxios, axios)
Vue.use(Button)
Vue.use(Layout)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Vuex)

axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.config.productionTip = false
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
