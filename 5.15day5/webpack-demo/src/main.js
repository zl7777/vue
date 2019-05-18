import a from './js/a'
import '@css/style'
import "@css/base"
// console.log(a.name)
import Vue from 'vue'

import axios from 'axios'

axios.get('/list').then(({ data }) => {
    console.log(data.Datas)

});
// import demo from 'demo.vue'
new Vue({
    el: '#app',
    components: { demo }
})