<template>
    <div>
        <h5>{{name}}</h5>
        <dl v-for="(item,index) in rightList" :key="index">
            <dt>
                <img :src="item.image" alt="">
            </dt>
            <dd>
                <p>{{item.name}}</p>
                <p>{{item.description}}</p>
                <p>{{item.info}}</p>
                <p>price:{{item.price}}元</p>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:{
        rightList:Array,
        name:String
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
dl{
    margin-bottom:10px;
    display:flex;
}
dt{
    width:120px;
    height:80px;
    background:red;
}
img{
    width:100%;
    height:100%;
}
dd{
    flex:1;
    height:80px;
    overflow: hidden;
}
dd p{
    margin-bottom:8px;
}
</style>
