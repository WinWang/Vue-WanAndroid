import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectHomeTab: 1
    },
    getters: {
        getHomeTab(state) {
            return state.selectHomeTab;
        }
    },
    mutations: {
        setHomeTab(state, index) {
            state.selectHomeTab = index
        }
    },
    actions: {
        setHomeTabs({commit, state}, index) {
            commit('setHomeTab', index)
        }
    },
    modules: {}
})
