//接口的开发

import Vue from "vue"
import Router from 'vue-router'
// import Bookcity from '@/views/bookcity' //静态加载的方式
// import Bookshelf from '@/views/bookshelf'
// import Search from '@/views/search'
const Bookcity = () =>
    import ('@/views/bookcity') //按需加载//书城
const Bookshelf = () =>
    import ('@/views/bookshelf') //书页
const Search = () =>
    import ('@/views/search') //搜索页
const Detail = () =>
    import ('@/views/detail') //详情页


Vue.use(Router)

const routes = [{
        path: '/',
        redirect: '/bookcity'
    },
    {
        path: '/bookcity',
        name: 'bookcity',
        component: Bookcity
    }, {
        path: '/bookshelf',
        name: 'bookshelf',
        component: Bookshelf
    },
    {
        path: '/search',
        name: 'search',
        component: Search
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    }
]
export default new Router({
    routes
})