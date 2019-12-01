import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import  'lib-flexible'
import './utils/rem';
import 'vant/lib/index.css';
import { Button, Loading } from 'vant';
Vue.config.productionTip = false;
Vue.use(Button)
    .use(Loading);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map