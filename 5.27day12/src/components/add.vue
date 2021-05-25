<template>
    <div>
        <div>这是递增组件的内容:{{count}}</div>
        <!-- <div>这是递增组件的内容:{{$store.state.count}}</div> -->
        <h3>这是list 的数据</h3>
        <h4>{{list}}</h4>
        
        <button @click="addActions(5)">递增</button>
        <h3>add组件里面展示的是所有大于30的</h3>
        <div>{{getlist}}===>{{getlength}}</div>
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'//辅助函数
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['count','list']),//接收的是一个数组mapstate是一个函数,在计算属性中相当于调用这个函数,他的返回值是一个对象
            //参数的名字要和store里面定义的一样
        ...mapGetters(['getlist','getlength'])
    },
    methods:{
        ...mapActions(['addActions'])//调用方法在methed里面
        // addcount(){
        //     // this.$store.state.count++;//不建议在这里直接修改stare因为追踪不到一个正确的状态
        //     // this.$store.commit('add',{num:5,grade:'1701B'})
        //     this.$store.dispatch('addActions',5)
        // }
    },  
    created(){
        console.log(this.$store.state.count)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>