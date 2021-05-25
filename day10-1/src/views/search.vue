<template>
    <div id="div">
        <!-- <div class="header">
            <h3>{{this.$route.params.val}}</h3>
        </div> -->
        <div class="cont">
            <div class="left">
                <div class="scroll">
                    <p v-for="(item,index) in list" :key="index"
                    @click="scRight(index)"
                    :class="{active:index == ind}"
                    >{{item.name}}</p>
                </div>
            </div>
            <div class="right">
                <div class="scroll2" ref="rightList">
                    <myList 
                    v-for="(item,index) in list" 
                    :key="index" 
                    :name="item.name" 
                    :rightList="item.foods"></myList>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import myList from "../components/right"
import BScroll from "better-scroll"

export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            list:[],
            ind:0,
            leftBScroll:null,
            rightBScroll:null,
            scrollY:0,
            scrollHArr:[]
        }
    },
    computed:{

    },
    methods:{
        init(){
            this.leftBScroll = new BScroll(".left",{click:true})
            this.rightBScroll = new BScroll(".right",{probeType:3})
            this.rightBScroll.on("scroll",(res) => {
                this.scrollY = Math.abs(res.y)
                console.log(res.y)
            })
        },
        scRight(ind){
            this.ind = ind
            
            // let child = this.$refs.rightList //当前点击的DOM元素
            let child = this.$refs.rightList.children  //所有点击的DOM元素
            console.log(child)
            this.rightBScroll.scrollToElement(child[ind],10)
        },
        scrollHeight(){
            let height = 0
            let child = this.$refs.rightList.children
            this.scrollHArr.push(height)
            for(let i = 0;i < child.length; i++){
                height += child[i].offsetHeight
                this.scrollH.push(height)
            }
        }
    },
    created(){
        axios.get("/api/findData").then(res => {
            this.list = res.data.data.goods
            console.log(this.list)
            this.init()
            this.scrollHeight()
        })
        console.log(this.$route.query.val)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
/* html,body #div{
    overflow: hidden;
/* } */
/* h3{
    width:100%;
    height:55px;
    line-height: 55px;
    text-align:center;
}  */
.cont {
    width:100%;
    height:100%;
    display:flex;
}
.left{
    width:136px;
    height:100%;
    background:#ccc;
}
p{
    height:50px;
    display:flex;
    align-items: center;
    justify-content: center;
}
.active{
    color:cornflowerblue;
}
.right{
    flex:1;
}
</style>