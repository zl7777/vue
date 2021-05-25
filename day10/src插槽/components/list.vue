<template>
    <div>
        <div class="dialog">
            <div class="content">
                <slot name='header'></slot>
                <div class="dialog-content">
                       <slot>
                           <input type="text">
                        </slot> 
                </div>
                <slot name="footer"></slot>
            </div>
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
        console.log(this)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.dialog{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    position: absolute;
    top: 0;
    left: 0;
}
.content{
    height: 200px;
    width: 80%;
    background: #fff;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -100px;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
}
.dialog-header{
    height: 44px;
    width: 100%;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.dialog-content{
    flex: 1;
}
.dialog-footer{
    width: 100%;height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: flex-end;
}
 .dialog-footer span{
     height: 40px;
     line-height: 40px;
     width: 120px;
     border: 1px solid #ccc;
     margin: 3px 3px;
     border-radius: 3px;
     text-align: center;
 }
</style>