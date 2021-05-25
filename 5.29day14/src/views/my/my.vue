<template>
    <div>
        <div class="left">
            左侧
        </div>
        <div class="right">
            <!-- <el-tabs type="border-card">
                <el-tab-pane label="首页1">首页</el-tab-pane>
                <el-tab-pane label="项目1">项目</el-tab-pane>
                <el-tab-pane label="粉丝1">粉丝</el-tab-pane>
            </el-tabs> -->
            <ul>
                <li @click="$router.push({name:'myhome'})">首页</li>
                <li @click="$router.push({name:'myproject'})">项目</li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    props: {},
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style scoped lang="">
</style>