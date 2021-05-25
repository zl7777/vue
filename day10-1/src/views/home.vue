<template>
    <div>
        <div class="page">
            首页
            <button @click="goToSearch">搜索</button>
        </div>
        
        <my-footer></my-footer>
    </div>
    
</template>
<script>


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
        
    },
    methods:{
        goToSearch(){
            this.$router.push({name:"search",params:{val:"网红唇辣重庆火锅"}})
        }
    },
    created(){
        
        console.log(this.$router)
        console.log(this.$route)
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="">

</style>