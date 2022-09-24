import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
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

/*****抓取router跳转的异常********/
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
/*****抓取router跳转的异常********/


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


/**
 * 登录拦截判断
 */
router.beforeEach((to, from, next) => {
    if (to.matched.some(m => m.meta.auth)) {
        if (store.state.isLogin) {
            next();
        } else {
            Toast.fail("请先登录！")
            next('/LoginView')
        }
    } else {
        next();
    }
})


