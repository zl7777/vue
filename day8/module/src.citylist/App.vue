<template>
  <div id="app">
    <my-left
    :list="list"
    @change="change"
    ></my-left> 
    <my-right
     :list="list[ind].cities"
     v-if="list[ind]"
    ></my-right>
  </div>
</template>

<script>
import myLeft from "./components/letf";
import myRight from "./components/right";
import axios from "axios";
export default {
  components: {
    myLeft,
    myRight
  },
  data() {
    return {
      ind:0,
      list:[]
    };
  },
  created() {
    axios.get('/api/city').then((res)=>{
      console.log(res.data.data)
      this.list=res.data.data;
      this.list[this.ind].cities.forEach(item=>this.$set(item,'flag',false))
      console.log(this.list[this.ind])
    }) 
  },
  watch: {
    ind(news,olds){
      this.list[news].cities.forEach(item=>this.$set(item,'flag',false))
    }
  },
  methods: {
    change(ind){
      this.ind=ind;
      console.log(ind)
    }
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  background: #0BB4B5;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app{
   display: flex;
}
</style>
