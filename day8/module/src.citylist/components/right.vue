<template>
    <div class="right">
       <ul>
           <li 
           v-for="(item, index) in list"
            :key="index"
           :class="{'current':item.flag}"
           @click='changeRight(index)'
           >{{item.name}}</li>
           
       </ul>
    </div>
</template>
<script>
export default {
    props:{
        list:Array
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
        changeRight(ind){
            this.list[ind].flag=!this.list[ind].flag;
        }
    },
    created(){
        console.log(this.list)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .right{
        flex: 1;
        height: 100%;
    }
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    li{
        width: 30%;
        line-height: 40px;
        text-align: center;
        border: 1px solid #fff;
        margin: 5px 3px;
        border-radius: 5px;
        color: #fff;
    }
    .current{
        background: yellow;
        color: #000;
    }
</style>