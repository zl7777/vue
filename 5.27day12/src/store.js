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


Vue.use(Vuex)
export default new Vuex.Store({
    state: { //共享的数据
        count: 1,
        list: [{
            grade: '1701B',
            count: 42
        }, {
            grade: '1701A',
            count: 42
        }, {
            grade: '1701C',
            count: 25
        }]
    },
    getters: { //需要从原始数据里面派生一些新的数据的时候,类似于computed
        getlist(state, getters) { //的一个参数就是state,第二个参数就是getters本身
            return state.list.filter(item => item.count > 30)
        },
        getlength(state, getters) {
            return getters.getlist.length;
        }
    },
    mutations: { //同步的方法,修改状态的方法唯一的方法
        add(state, num) { //第一个参数固定的state,第二个参数是外面调用所传递的一个参数的值 ,如果是传递多个值的时候需要放进一个对象里面传递
            // console.log(obj)
            state.count += num
        },
        del(state) {
            state.count--
        },
        addcount() {}
    },
    actions: { //异步的方法
        addActions(context, num) { //context跟state有着同样的方法和属性,但是又不等于state 
            console.log(context, num)
            setTimeout(() => {
                context.commit('add', num)
            }, 2000);

        }
    }
})