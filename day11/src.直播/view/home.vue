<template>
    <div>
        <div class="page">
            <ul class="title">
                <li @click="$router.push({name:'new'})">最新</li>
                <li @click="$router.push({name:'hot'})">最热</li>
                <li @click="$router.push({name:'look'})">关注</li>
                <li>NBA</li>
                <li>CBA</li>
            </ul>
            <router-view></router-view>
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

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.title{
    width: 100%;
    height: 44px;
    display: flex;
    background: #ccc;
    color: #fff;
}
.title li{
    flex: 1;
    line-height: 44px;
    text-align: center;
}
.page{
     overflow-y: auto;
}

</style>