import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

router.beforeEach( async(to, from, next) => {
    if (!store.state.UserToken) {
        if (
            to.matched.length > 0 &&
            !to.matched.some(record => record.meta.requiresAuth)
        ) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        if (!store.state.permission.permissionList) {
            console.log(store.state.permission.permissionList);
            await store.dispatch('permission/FETCH_PERMISSION')
            next({ path: to.path || '/' }, onComplete => { }, onAbort => { })
        } else {
            if (to.path !== '/login') {
                next()
            } else {
                next(from.fullPath)
            }
        }
    }
})

router.afterEach((to, from, next) => {
    var routerList = to.matched
    store.commit('SET_CRUMBLIST', routerList)
    store.commit('permission/SET_CURRENT_MENU', to.name)
})

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
