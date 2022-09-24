import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectHomeTab: 1,
        userName: '',
        isLogin: false,
        toolBarHeight: 0, //title栏高度
    },


    getters: {
        getHomeTab(state) {
            return state.selectHomeTab;
        },

        getUserName(state) {
            return state.userName
        },

        getLoginState(state) {
            return state.isLogin
        },

        getTitleBarHeight(state) {
            return state.toolBarHeight;
        }

    },


    mutations: {
        setHomeTab(state, index) {
            state.selectHomeTab = index
        },

        setUserName(state, userName) {
            state.userName = userName;
            if (userName != '' && userName != undefined && userName != null) {
                state.isLogin = true;
            }
        },

        setToolBarHeight(state, toolBarHeight) {
            state.toolBarHeight = toolBarHeight;
        }


    },
    actions: {
        setHomeTabs({commit, state}, index) {
            commit('setHomeTab', index)
        },

        setUserNameAsyn({commit, state}, userName) {
            commit('setUserName', userName)
        },

        setToolBarHeight({commit, state}, toolBarHeight) {
            commit('setToolBarHeight', toolBarHeight)
        }


    },


    modules: {}
})
