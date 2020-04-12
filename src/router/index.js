import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MemberInfoManagement/DataQuery'
import login from '../views/login'
import Layout from '@/views/layout'

const MobileDataQuery = () => import('@/views/mobile/DataQuery');

Vue.use(VueRouter)

/* 准备动态添加的路由 */
export const DynamicRoutes = [
    {
        path: '',
        component: Layout,
        name: 'container',
        redirect: 'home',
        meta: {
            requiresAuth: true,
            name: '首页'
        },
        children: [
            {
                path: '/home',
                component: Home,
                name: 'home',
                meta: {
                    name: '首页',
                    icon: 'icon-home'
                }
            },
        ]
    },
    {
        path: '/mobile/dataQuery',
        component: MobileDataQuery,
        name: 'dataQuery',
        meta: {
            name: '移动端数据查询',
        }
    }
]
/*默认路由*/
const routes = [
    {
        path: '/login',
        name: 'login',
        component: login
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
