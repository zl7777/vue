import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Table = () =>
    import ('@/views/table')
const Home = () =>
    import ('@/views/home')
const From = () =>
    import ('@/views/from')
const List = () =>
    import ('@/views/list')

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        meta: { name: '导航一' },
        component: Home,
        children: [{
                path: 'table',
                name: 'table',
                meta: { name: 'Table' },
                component: Table
            }, {
                path: 'from',
                name: 'from',
                meta: { name: 'From' },
                component: From
            },
            {
                path: 'list',
                name: 'list',
                meta: { name: 'List' },
                component: List
            }
        ]
    }]
})