import {LOGIN_IN, LOGIN_OUT, TOGGLE_NAV_COLLAPSE, SET_CRUMBLIST} from "./types"
export default {
    [LOGIN_IN](state, token) {
        state.UserToken = token
    },
    [LOGIN_OUT](state) {
        state.UserToken = ''
    },
    [TOGGLE_NAV_COLLAPSE](state) {
        state.isSidebarNavCollapse = !state.isSidebarNavCollapse
    },
    [SET_CRUMBLIST](state, list) {
        state.crumbList = list
    }
}