<template>
    <div class="left">
        <ul>
            <li
            v-for="(item,index) in list"
            :key="index"
            @click="changeleft(index)"
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
        changeleft(ind){
            this.$emit('change',ind)
            console.log(ind)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .left{
        width: 120px;
        height: 100%;
        border-right: 1px solid #ccc;
        overflow-y: auto;
    }
    li{
        list-style: none;
        margin: 10px;
        border: 1px solid #000;
        text-align: center;
        line-height: 44px;
        border-radius: 8px;
        background: #fff;
    }
</style>