import App from './App.vue';
import Vue from 'vue/dist/vue.esm.js';
console.log(App)
new Vue({
    el: '#app',
    template: '<App />', //注册一个模板,认识一下注册完成之后在来使用组件
    components: {
        App
    }
})