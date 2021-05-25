import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import Discover from '@/views/discover'
import Order from '@/views/order'
import Prefile from '@/views/prefile'
import Serach from '@/views/serach'
import Shop from '@/views/shop'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/discover',
            name: 'discover',
            component: Discover
        },
        {
            path: '/order',
            name: 'order',
            component: Order
        },
        {
            path: '/prefile',
            name: 'prefile',
            component: Prefile
        },
        {
            path: '/serach',
            name: 'serach',
            component: Serach
        },
        {
            path: '/shop/:id',
            name: 'shop',
            component: Shop
        }
    ]
})