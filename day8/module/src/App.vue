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
          :title="item.title"
          :content="item.content"
          :type="item.type"
          :time="item.time"
          :bool="item.bool"
        ></my-list>
      </section>
  </div>
</template>

<script>
import data from "./mock";
import myList from "./components/myList";
export default {
  components: {
    myList
  },
  data() {
    return {
      ind:0,
      typeList: ["未开始", "已打卡", "已放弃", "全部"],
      list: []
    };
  },
  created() {
    console.log(data.list)
    // this.list = data.list.filter(item =>item.type ==1); 
    this.list=this.getList(1)
    console.log(this.list)
  },
  methods: {
    clickFn(ind){
      this.ind=ind;
      this.list=this.getList(ind+1)
      this.getList(ind+1)
    },
    getList(type){
      return data.list.filter(item =>item.type ==type);
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
  line-height: 44px;
}
.active {
  background: steelblue;
  color: #fff;
}
section {
  flex: 1;
  overflow-y: auto;
}
</style>
