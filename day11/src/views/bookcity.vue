<template>
  <div>
    <my-header>
      <ul>
        <router-link to="/bookcity" tag="li">书城</router-link>
        <router-link to="/bookshelf" tag="li">书架</router-link>
      </ul>
    </my-header>
    <Search :flag="false"/>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
          <img :src="item.ad_pic_url" alt>
        </div>
      </div>
    </div>
    <div>
      <h3 class="hh">本周最火</h3>
      <div class="list">
         <my-list
      v-for="(item,index) in hotList"
      :key="index"
      :img='item.cover'
      :id="item.fiction_id"
      :title='item.title'
      classname='downlist'
      ></my-list>
      </div>
    </div>
    <div>
      <h3 class="hh">重磅推荐</h3>
      <div class="list">
         <my-list
      v-for="(item,index) in list"
      :key="index"
      :img='item.cover'
      :id="item.fiction_id"
      :title='item.title'
      classname='leftlist'
      ></my-list>
      </div>
    </div>
  </div>
</template>

<script>

import swiper from "swiper"
export default {
  props: {},
  components: {
  },
  data() {
    return {
      bannerlist: [],
      hotList:[],
      list:[]
    };
  },
  computed: {},
  methods: {},
  created() {
    this.$http.get("/api/home").then(res => {
      this.bannerlist = res.data.data.items[0].data.data;
      this.hotList = res.data.data.items[1].data.data;
      this.list = res.data.data.items[2].data.data;
      console.log(res.data.data.items[1].data.data);
      this.$nextTick(() => {
        //动态请求到的数据一定要放在这里实例
        new swiper(".swiper-container");
      });
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
  font-weight: bold;
}
ul li {
  flex: 1;
  line-height: 44px;
  text-align: center;
}

.swiper-container {
  width: 100%;
  height: 150px;
  flex-shrink:0;

    /* margin: 0 auto; */
    /* position: relative; */
    /* overflow: unset; */
    /* list-style: none; */
    /* padding: 0; */
    /* z-index: 1; */
}
.swiper-slide {
  width: 100%;
  height: 100%;
    
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.hh{
  height: 50px;
  line-height: 50px;
}
.list{
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>