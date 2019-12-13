import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'mainview',
        component: MainView,
        meta: {
            keepAlive: true
        },
        children: [
            {
                name: 'Home',
                path: '/Home',
                component: () => import('../components/HomeComp.vue'),
                meta: {
                    keepAlive: true
                }
            },

            {
                name: 'System',
                path: '/System',
                component: () => import('../components/SystemComp.vue'),
                meta: {
                    keepAlive: true
                }
            },

            {
                name: 'WeChat',
                path: '/WeChat',
                component: () => import('../components/WeChatComp.vue'),
                meta: {
                    keepAlive: true
                }
            },

            {
                name: 'Project',
                path: '/Project',
                component: () => import('../components/ProjectComp.vue'),
                meta: {
                    keepAlive: true
                }
            },
            {
                name: 'Site',
                path: '/Site',
                component: () => import('../components/SiteComp.vue'),
                meta: {
                    keepAlive: true
                }
            }

        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/About.vue')
    },

    {
        path: '/ColletView',
        name: 'ColletView',
        component: () => import( '../views/ColletView.vue'),
        meta:{
            auth:true
        }
    },


    {
        path: '/LoginView',
        name: 'LoginView',
        component: LoginView,
        meta: {
            keepAlive: false
        },
    },

    {
        path: '/RegisterView',
        name: 'RegisterView',
        component: RegisterView,
        meta: {
            keepAlive: false
        },
    }



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
