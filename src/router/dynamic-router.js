/* 数据采集 */
const DataEntry = () => import('@/views/MemberInfoManagement/DataEntry');

/* 需要权限判断的路由 */
const dynamicRoutes = [
    {
        path: '/data-entry',
        component: DataEntry,
        name: 'dataEntry',
        meta: {
            name: '数据采集',
            icon: 'icon-order-manage'
        }
    }
]

export default dynamicRoutes
