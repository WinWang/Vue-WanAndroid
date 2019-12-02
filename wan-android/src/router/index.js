import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/mainview',
        name: 'mainview',
        component: MainView,
        children: [
            {
                name: 'Home',
                path: '/Home',
                component: () => import('../components/HomeComp.vue')
            },

            {
                name: 'System',
                path: '/System',
                component: () => import('../components/SystemComp.vue')
            },

            {
                name: 'WeChat',
                path: '/WeChat',
                component: () => import('../components/WeChatComp.vue')
            },

            {
                name: 'Project',
                path: '/Project',
                component: () => import('../components/ProjectComp.vue')
            },
            {
                name: 'Mine',
                path: '/Mine',
                component: () => import('../components/MineComp.vue')
            }

        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
