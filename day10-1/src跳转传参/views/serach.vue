<template>
    <div>
        搜索页面{{$route.query.val}}

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

    },
    created(){
        console.log(this.$route.query.val);//接收参数的时候用route
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>