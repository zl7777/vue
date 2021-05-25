<template>
  <van-row gutter>
    <van-col span="24"
      ><van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    /></van-col>
    <van-col span="24"
      ><van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe></van-col
    >
    <van-col span="24">span: 8</van-col>
  </van-row>
</template>
<script>
// import myAdd from '../components/add'
// import myDel from '../components/del'
export default {
  props: {},
  components: {
    // myAdd,
    // myDel
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
