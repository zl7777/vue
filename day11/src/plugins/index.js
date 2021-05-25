//全局的东西放到自己封装的插件里
import myHeader from "@/components/header"; //静态加载
import myList from "@/components/list";
import Search from "@/components/search";
import axios from 'axios' //设置完成后可以全局引用

export default {
    install(Vue) { //接收的第一个参数是VUE的这个构造器
        console.log(Vue)
        Vue.component("myHeader", myHeader);
        Vue.component("myList", myList);
        Vue.component("Search", Search);
        Vue.prototype.$http = axios; //原型上挂载
    }
}