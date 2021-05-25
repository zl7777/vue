<template>
  <div id="app">
    <section>
      <!-- 出口最后要输出的位置 -->
      <router-view></router-view>
    </section>
      <footer>
        <a href="/#/">首页</a>
        <a href="/#/discover">发现</a>
        <a href="/#/order">订单</a>
        <a href="/#/prefile">我的</a>
      </footer>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  }
};
</script>

<style>

</style>
