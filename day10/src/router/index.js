//路由的配置文件    地址栏发生变化内容跟着变化,这就是路由
import Vue from 'vue'
import VueRouter from 'vue-router' //第三方的一个插件
import Home from '../views/home'
import Discover from '../views/discover'
import Order from '../views/order'
import Prefile from '../views/prefile'
Vue.use(VueRouter) //插件叫什么就注册什么

//配置路由信息,路由表
// routes= [{
//     path: '/',
//     component: Home
// },
// {
//     path: '/discover',
//     component: Discover
// },
// {
//     path: '/order',
//     component: Order
// },
// {
//     path: '/prefile',
//     component: Prefile
// }
// ]


//第三步实例 并且抛出
export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/discover',
            component: Discover
        },
        {
            path: '/order',
            component: Order
        },
        {
            path: '/prefile',
            component: Prefile
        }
    ]
})