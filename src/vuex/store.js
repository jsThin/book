import Vue from 'vue'
import Vuex from 'vuex'

const state = {
    count: 0,
    firstName: "zs",
    isLoading: false
}
const mutations = {
    add(state) {
        state.count ++
    },
    setLoading(state,data) {
        state.isLoading = data
    }
}
const getters = {
    isLoading(state) {
       return state.isLoading
    }
}
const actions = {
    
}

Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
export default store