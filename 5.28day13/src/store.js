//下载
//src文件夹里新建一个store.js
//引入vue
//引入vuex
//注册vuex
//抛出VUEX实例
//在main.js 里面挂载


//这里面放的其实就是共享的数据,相当于一个仓库
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
export default new Vuex.Store({
    state: { //共享的数据
        list: []
    },
    getters: { //需要从原始数据里面派生一些新的数据的时候,类似于computed

    },
    mutations: { //同步的方法,修改状态的方法唯一的方法
        getListMutations(state, list) {
            state.list = list
        },
        addListMutations(state, obj) {
            state.list.unshift(obj)
        },
        updateListMutations(state, obj) {
            let index = state.list.findIndex(item => item.id == obj.id)
            state.list.splice(index, 1, obj)
        },
        deleteListMutations(state, id) {
            state.list = state.list.filter(item => item.id != id)
        },
        filterListMutations(state, list) {
            state.list = list
        }
    },
    actions: { //异步的方法
        getList({ commit }) { //获取数据
            axios.get('http://jsonplaceholder.typicode.com/todos').then((res) => {
                commit('getListMutations', res.data)
            })
        },
        addList({ commit }, title) { //添加数据
            axios.post('http://jsonplaceholder.typicode.com/todos', { title, userId: 1, completed: false }).then((res) => {
                commit('addListMutations', res.data)
            })
        },
        updateList({ commit }, obj) { //更新数据的方法
            axios.put(`http://jsonplaceholder.typicode.com/todos/${obj.id}`, obj).then((res) => {
                commit('updateListMutations', res.data)
            })
        },
        deleteList({ commit }, id) { //删除数据的方法
            axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
                commit('deleteListMutations', id)
            })
        },
        filterList({ commit }, count) { //过滤数据的方法
            axios.get(`http://jsonplaceholder.typicode.com/todos/?_limit=${count}`).then((res) => {
                commit('filterListMutations', res.data)
            })
        }
    }
})