<template>
  <div id="app">
   
    <router-view/>
   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
html,body,#app{
  width: 100%;height: 100%;
}
#app>div{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
footer{
  height: 50px;
  display: flex;
}
footer a{
  flex: 1;
  line-height: 50px;
  text-align: center;
}
.page{
  flex: 1;
}
.router-link-active{
  color: orange;
  font-weight: bold;
}
</style>
