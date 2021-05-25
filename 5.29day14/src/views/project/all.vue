<template>
    <div>
        <h3>所有的项目数据({{getList($route.params.type).length}}) {{$route.params.type}}</h3>
        <div class="list">
            <my-list 
            v-for="(item,index) in getList($route.params.type)"
            :key="index"
            :title="item.title"
            :img="item.img"
            ></my-list>
        </div>

    </div>
</template>
<script>
import myList from '../../components/list'
import {mapActions,mapState,mapMutations,mapGetters} from 'vuex'
// import func from './vue-temp/vue-editor-bridge';
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['list']),
        ...mapGetters(['getList','getLength'])
    },
    methods:{
       ...mapActions(['getData']),
    },
    created(){
        this.getData()
        // console.log(this.getList('all'));
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>