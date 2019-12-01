import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './utils/rem.js'
import {Toast, Dialog} from 'vant'

axios.defaults.baseURL = '/api'  //关键代码
Vue.config.productionTip = false
Vue.use(Toast).use(Dialog)
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;
Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
