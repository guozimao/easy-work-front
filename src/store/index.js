import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
import actions from './actions'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})
