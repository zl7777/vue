import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list: []
    },
    getters: {
        getList(state, getters) { //过滤数据
            return (type) => {
                console.log(type);
                console.log(state.list);
                return type == 'all' ? state.list : state.list.filter(item => item.type == type);
                // return state.list.filter(item => item.type == type)
            }
        },
        getLength(state, getters) {
            console.log(getters.getList);
            return (type) => {
                    console.log(type);
                    console.log(state.list);
                    return type == 'all' ? state.list.length : state.list.filter(item => item.type == type).length;
                    // return state.list.filter(item => item.type == type)
                }
                // return getters.getList.length;
        }
    },
    mutations: {
        getDataMuTations(state, list) {
            state.list = list;
        }
    },
    actions: {
        getData({ commit }) {
            axios.get('/api/list').then((res) => {
                console.log(res.data);
                commit('getDataMuTations', res.data.list);
            });
        }
    }
})