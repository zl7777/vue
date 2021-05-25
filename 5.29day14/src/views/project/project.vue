<template>
    <div class="project">
        <div class="left">
            <div>
                <h3>项目</h3>
                <i class="el-icon-plus"></i>
            </div>
            <ul>
                <li @click="$router.push({name:'all',params:{type:'all'}})">所有项目</li>
                <li @click="$router.push({name:'all',params:{type:'par'}})">我参与的</li>
                <li @click="$router.push({name:'all',params:{type:'lau'}})">我发起的</li>
                <li @click="$router.push({name:'all',params:{type:'gui'}})">归档的项目</li>
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
            isTrue:true
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
.project{
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
    justify-content: space-around;
    height: 50px;
    line-height: 50px;
    align-items: center;
}
.left ul{
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: skyblue;
    color: #fff;
}
.left ul li{
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
}
.right{
    flex: 1;
    height: 100%;
}
</style>