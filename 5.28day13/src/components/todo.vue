<template>
  <div class="todolist">
    <h3>代办项</h3>
    <ul>
      <li 
        v-for="(item,index) in list" 
        :key="index" 
        :class="{'active': item.completed}"  
        @dblclick="clickFn(item)"
        >
      
        <span>{{item.title}}</span>
        <span @click="deleteList(item.id)">删除</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["list"])
  },
  methods: {
    ...mapActions(["getList","updateList","deleteList"]),
    clickFn(item){
        const obj={
            title:item.title,
            userId:item.userId,
            id:item.id,
            completed:!item.completed
        }
        this.updateList(obj)
    }
  },
  created() {
    this.getList();
  },
  mounted() {}
};
</script>
<style scoped lang="">
.todolist {
  width: 80%;
  margin-left: 10%;
}
.todolist ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.todolist ul li {
  padding: 5px 10px;
  background: skyblue;
  color: #fff;
  margin: 10px;
  box-sizing: border-box;
}
.todolist ul li.active {
  background: coral;
}
</style>