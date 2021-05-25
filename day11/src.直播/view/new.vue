<template>
  <div>
    <my-list
      v-for="(item,index) in list"
      :key="index"
      :title="item.title"
      :img="item.img"
      :time="item.time"
      :content="item.content"
      :id="item.id"
      :flag="item.flag"
      @changeFn="chang"
    ></my-list>
  </div>
</template>
<script>
import axios from "axios";
import myList from "../components/list";
export default {
  props: {},
  components: {
    myList
  },
  data() {
    return {
      list: []
    };
  },
  computed: {},
  methods: {
    chang(id) {
      let ind = this.list.findIndex(item => item.id == id);
      this.list[ind].flag=true;
    }
  },
  created() {
    axios.get("/api/list").then(res => {
      this.list = res.data.data;
      console.log(this.list);
    });
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>