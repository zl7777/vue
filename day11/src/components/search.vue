<template>
    <div class="search">
        <p @click="$router.push({name:'search'})"></p>
        <button v-show="flag" @click="$emit('change')">点击</button>
    </div>
</template>
<script>
export default {
    props:['flag'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        change(){
            
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.search{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    flex-shrink:0;
}
.search p{
    border: 1px solid #ccc;
    height: 40px;
    flex: 1;
}
.search button{
    width:120px;
}
</style>