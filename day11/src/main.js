// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//main是入口文件

//所有的插件引入之后都需要注册,无论是第三方的还是自己开发的
import Vue from 'vue';
import App from './App';
import router from "./router";
import 'swiper/dist/css/swiper.min.css'
import plugins from './plugins' //自己开发的一个插件
import Vuelazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(Vuelazyload, {
    preload: 3,
    loading: '../static/loading.gif',
    attempt: 1
})
Vue.use(plugins) //不管是第三方的还是自己的,都需要注册
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})