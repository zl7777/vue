<template>
<div class="box"> 
    <img :src="Image" alt="">
    <p>{{Name}}</p>
    <p>{{Sales}}</p>
    <p>{{Introduction}}</p>
</div>
 
</template>

<script>
export default {
  props: ["Image", "Name", "Sales", "Introduction"],
  data(){
      return {
           list:["全部", "特价", "水果", "轻食",'乳品']
      }
  }
};
</script>


<style scoped>
.box{
 display: flex;
 flex-direction: column;
 width: 120px;
 height: 180px;
 align-items: center;
 text-align: center;
 margin: 2px;
 box-sizing: border-box;
}

img{
  width: 100px;
  height: 100px;
}
</style>
