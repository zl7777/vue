// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import myFooter from "./components/footer";
import router from "./router";


Vue.config.productionTip = false
Vue.component("myFooter", myFooter)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})