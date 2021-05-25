<template>
    <div>
        <div class="page">
            首页
             <!-- <router-link to='/serach'>去搜索</router-link> -->
             <!-- 声明式 -->
             <button @click="goToSerach">去搜索 </button>

             <ul>
                 <li 
                 v-for="(item,index) in list" 
                 :key="index"
                 @click="goToShop(item.id)"
                 >{{item.title}}</li>
             </ul>
        </div>
       
        <my-footer></my-footer>
    </div>
</template>
<script>
// import myFooter from '../components/footer'

export default {
    props:{

    },
    components:{
        // myFooter
    },
    data(){
        return {
            list:[
                {
                    title:"小笼包",
                    id:1
                },
                 {
                    title:"麻辣烫",
                    id:2
                },
                 {  
                    title:"肯德基",
                    id:3
                },
                 {
                    title:"黄焖鸡",
                    id:4
                }
            ]
        }
    },
    computed:{

    },
    methods:{
        goToSerach(){
            //编程式的跳转3种push/replace/go
            // this.$router.push('serach')//字符串
            // this.$router.push({path: '/serach',query:{val:'要传递的参数'}})//传递用router参数
            this.$router.replace({path: '/serach',query:{val:'要传递的参数'}})//传递用router参数
            // this.$router.push({name: 'serach'})//name命名的路由方式跳转,不用加/
        },
        goToShop(id){
            this.$router.push({name:'shop',params:{id:id}})
        }
    },
    created(){
        console.log(this.$router)//所有路由信息
        console.log(this.$route)//当前路由信息
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>