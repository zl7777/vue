<template>
    <div>
        <div>这是递减组件的内容:{{$store.state.count}} </div>
        <button @click="del">递减</button>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
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
        ...mapMutations(['del'])
        // delcount(){
        //     this.$store.commit('del')
        // }
    },
    created(){
        //因为当前的实例挂在了该方法
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>