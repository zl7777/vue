import Vue from "vue"
import Router from "vue-router" //下包 npm i vue-router
import Home from "../views/home"
import Discover from "../views/discover"
import Order from "../views/order"
import Prefile from "../views/prefile"
import Search from "../views/search"
Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/discover",
            name: "discover",
            component: Discover
        },
        {
            path: "/order",
            name: "order",
            component: Order
        },
        {
            path: "/prefile",
            name: "prefile",
            component: Prefile
        },
        {
            path: "/search",
            name: "search",
            component: Search
        }
    ]
})