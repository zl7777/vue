<template>
  <div>
    <my-header>
      <ul>
        <router-link to="/bookcity" tag="li">书城</router-link>
        <router-link to="/bookshelf" tag="li">书架</router-link>
      </ul>
    </my-header>
    <Search :flag="true" @change="change"/>
    <div class="list">
      <my-list
        v-for="(item,index) in recommend1"
        :key="index"
        :img="item.cover"
        :id="item.fiction_id"
        :title="item.title"
        :classname="name"
      >
        <template v-if="name=='leftlist'">
          <p>作者:{{item.authors}}</p>
          <p>简介--{{item.summary}}</p>
        </template>
      </my-list>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {
  },
  data() {
    return {
      recommend1: [],
      name: "leftlist"
    };
  },
  computed: {},
  methods: {
    change() {
      this.name = this.name == "leftlist" ? "downlist" : "leftlist";
    }
  },
  created() {
    this.$http.get("/api/recommend1").then(res => {
      this.recommend1 = res.data.data.items;
      console.log(res.data);
    });
  },
  mounted() {}
};
</script>
<style scoped lang="">
ul {
  height: 44px;
  width: 100%;
  display: flex;
  color: #000;
  font-weight: bold;
}
ul li {
  flex: 1;
  line-height: 44px;
  text-align: center;
}
.list {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
.list dl {
  border-bottom: 1px solid #ccc;
  margin-top: 5px;
}
</style>