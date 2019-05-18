<template>
  <div id="app">
      <header>
        <span 
        v-for="(item,index) in typeList" 
        :key="index"
        :class="{'active':index == ind}"
        @click='clickFn(index)'
        >{{item}}</span>
      </header>
      <section>
        <my-list
            v-for="(item,index) in list"
          :key="index"
          :Image="item.Image"
          :Name="item.Name"
          :Sales="item.Sales"
          :Introduction="item.Introduction"
        ></my-list>
      </section>
  </div>
</template>

<script>
import myList from "./components/myList";
import axios from "axios";

export default {
  components: {
    myList
  },
  data() {
    return {
      ind:0,
      typeList: ["全部", "特价", "水果", "轻食",'乳品'],
      list: []
    };
  },
  created() {
    axios.get('/api/list').then((res)=>{
     this.list= res.data.data.Datas.FlowerList
     console.log(this.list)
      // this.list=res.data.data;
      // this.list[this.ind].cities.forEach(item=>this.$set(item,'flag',false))
      // console.log(this.list[this.ind])
    }) 
  },
  methods: {
    // clickFn(ind){
    //   this.ind=ind;
    //   this.list=this.getList(ind+1)
    //   this.getList(ind+1)
    // },
    getList(type){
      // return data.list.filter(item =>item.type ==type);
    }
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  display: flex;
  flex-direction: column;
}
header {
  height: 44px;
  width: 100%;
  display: flex;
}
header span {
  flex: 1;
  text-align: center;
  line-height: 38px;
  background: #ccc;
  border-radius: 8px;
  margin: 3px;
  box-sizing: border-box;
}
.active {
  background: steelblue;
  border: 1px solid orange;

  color: #fff;
}
section {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  background: #ccc;
}
</style>
