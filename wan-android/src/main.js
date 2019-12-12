import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './utils/rem.js'
import api from './utils/api'
import {Toast, Dialog} from 'vant'
import utils from './utils/commonUtils'

axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false
Vue.use(Toast).use(Dialog)
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.prototype.$utils = utils;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
