<template>
    <dl>
        <dt>
            <img :src="img" alt="">
        </dt>
        <dd>
            <p>名称:{{title}}</p>
            <p>单价:{{newprice}}</p>
            <p>原价:{{oldprice}}</p>
            <p @click="$emit('add',id)" class="ps">+</p>
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        title:String,
        newprice:Number,
        oldprice:Number,
        num:Number,
        id:Number,
        img:String
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
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 20px 6px;
    justify-content: center;
    align-items: center;
}
img{
    height: 120px;
    width: 100px;
    /* background: red; */
}
.ps{
    border: 1px solid #000;
    text-align: center;
    background: #eee;
}
</style>