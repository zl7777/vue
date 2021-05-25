<template>
  <div class="wrap">
    <header>
      <span :class="{'active':isCollapse}">demo</span>
      <div>
        <i class="el-icon-s-operation" @click="change"></i>
        <span>1701B</span>
      </div>
    </header>
    <div class="content">
      <aside>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          :collapse="isCollapse"
          :collapse-transition="isShow"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="$router.push({name:'table'})">table</el-menu-item>
              <el-menu-item index="1-2" @click="$router.push({name:'from'})">from</el-menu-item>
              <el-menu-item index="1-3" @click="$router.push({name:'list'})">列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </aside>
      <section>
        <div class="table-head">
          <h3>{{$route.meta.name}}</h3>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">{{item.meta.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <router-view></router-view>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      isCollapse: false,
      isShow: false
    };
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    change() {
      console.log(111);
      this.isCollapse = !this.isCollapse;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 60px;
  display: flex;
  background: skyblue;
}
header > span {
  width: 200px;
  height: 100%;
  line-height: 60px;
  text-align: center;
  color: #fff;
}
header > div {
  flex: 1;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
.content {
  flex: 1;
  width: 100%;
  display: flex;
}
aside {
  width: 200px;
  height: 100%;
}
.active {
  width: 60px;
}
section {
  flex: 1;
  padding: 0 20px;
  box-sizing: border-box;
}
.el-menu {
  height: 100%;
}
.table-head {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center; 
}
</style>