<template>
  <div id="app">
    <header>
      <span>1701B</span>
      <ul>
        <li>
          <el-dropdown @command="handleCommand">
            <i class="el-icon-circle-plus-outline"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">任务</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus" command="project">项目</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <i class="el-icon-folder-opened"></i>
        </li>
        <li>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              我的
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item icon="el-icon-plus" command="user">个人设置</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus" command="my">我的主页</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: "App",
    methods:{
      handleCommand(command){
        console.log(command);
        this.$router.push({name:command})
      }
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
html,
body,
#app {
    height: 100%;
    width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
header{
  height: 60px;
  width: 100%;
  background: #20a0ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
}
header>ul{
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  box-sizing: border-box;
}
header>ul li{
  padding: 0 10px;
}
#app>div{
  flex: 1;
  width: 100%;
}
</style>
