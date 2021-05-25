<template>
    <dl>
        <dt>
            <img :src="img" alt="">
        </dt>
        <dd>
            {{title}}
        </dd>
    </dl>
</template>
<script>
export default {
    props:{
        title:{
            type:String
        },
        img:{
            type:String
        }
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
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }
    dl dt{
        height: 120px;
        width: 200px;
    }
    dl dt img{
        height: 100%;
    }
</style>