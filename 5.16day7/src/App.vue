<template>
    <div>
        <my-list 
        :grade="grade"
        :cont="cont"
        :styleObj="styleObj"
        :img="img"
        ></my-list>
       
    </div>
    
</template>

<script>
import myList from './componets/list.vue'
export default {
    data(){
        return {
            grade:'1701B',
            cont:42,
            styleObj:{
                height:'200px',
                width:'100%',
                display:'inline-block'
            },
            img:[
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg",
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1055727654,337004439&fm=27&gp=0.jpg",
                "http://img1.imgtn.bdimg.com/it/u=1288830016,3309591979&fm=26&gp=0.jpg"
            ]
        }
    },
    components: {
        myList
    }
}
</script>

<style>

</style>
