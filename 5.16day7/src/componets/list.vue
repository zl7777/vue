<template>
    <div>
        <span>{{grade}}</span>
        <span>{{cont}}</span>
        <img :src="item" alt="" v-for="(item,index) in img" :key="index" :style="styleObj">
      

    </div>
    
</template>

<script>
export default {
    props:['grade','cont','styleObj','img']
}
</script>

<style>
    /* div{
        background: red;
    } */
</style>
