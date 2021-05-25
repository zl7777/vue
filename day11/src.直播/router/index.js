import Vue from "vue"
import Router from 'vue-router'
import Home from '@/view/home'
import Video from '@/view/video'
import News from '@/view/news'
import Frunt from '@/view/frunt'
import List from '@/view/list'
import New from '@/view/new'
import Hot from '@/view/hot'
import Look from '@/view/look'
import Detail from '@/view/detail'

Vue.use(Router)

const routes = [{
        path: '/',
        redirect: { name: 'new' }
    },
    {
        path: '/home',
        name: 'home',
        children: [{
            path: 'new',
            name: 'new',
            component: New
        }, {
            path: 'hot',
            name: 'hot',
            component: Hot
        }, {
            path: 'look',
            name: 'look',
            component: Look
        }],
        component: Home
    },
    {
        path: '/video',
        name: 'video',
        component: Video
    },
    {
        path: '/news',
        name: 'news',
        component: News
    },
    {
        path: '/frunt',
        name: 'frunt',
        component: Frunt
    },
    {
        path: '/list',
        name: 'list',
        component: List
    }, {
        path: '/detail',
        name: 'detail',
        component: Detail
    }
]
export default new Router({
    routes
})