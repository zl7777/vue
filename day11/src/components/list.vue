<template>
    <dl :class="classname" @click="$router.push({name:'detail',params:{id:id}})">
        <dt>
            <img v-lazy="img" alt="">
        </dt>
        <dd>
            <h3>{{title}}</h3>
            <slot></slot>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        img:String,
        title:String,
        classname:String,
        id:Number
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

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
dl.downlist{
    width: 30%;
    padding: 5px;
}
dl.leftlist{
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ccc;
}
dl dt{
    width: 120px;
    height: 150px;
}
dl dt img{
    width: 100%;
    height: 100%;
}
dl.leftlist dd{
    flex: 1;
}
</style>