import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectHomeTab: 1,
        userName: '',

    },


    getters: {
        getHomeTab(state) {
            return state.selectHomeTab;
        },

        getUserName(state) {
            return state.userName
        }

    },


    mutations: {
        setHomeTab(state, index) {
            state.selectHomeTab = index
        },

        setUserName(state, userName) {
            state.userName = userName;
        }


    },
    actions: {
        setHomeTabs({commit, state}, index) {
            commit('setHomeTab', index)
        },

        setUserNameAsyn({commit, state}, userName) {
            commit('setUserName', userName)
        }


    },


    modules: {}
})
