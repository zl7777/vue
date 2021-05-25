<template>
    <div class="user">
        <div class="left">
            <div>
                <h3>个人账户</h3>
               
            </div>
            <ul>
                <li @click="$router.push({name:'set'})">个人设置</li>
                <li @click="$router.push({name:'public'})">公钥</li>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
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
.user{
    height: 100%;
    width: 100%;
    display: flex;
}
.left{
    width: 200px;
    height: 100%;
    background: cornflowerblue;
}
.left>div{
    display: flex;
}
.right{
    flex: 1;
    height: 100%;
}
</style>