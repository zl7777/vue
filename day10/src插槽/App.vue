<template>
  <div id="app">
    <my-list>
      <template v-slot:header>
          <div class="dialog-header">
                    <h3>标题</h3>
                    <span>X</span>
            </div>
      </template>
      
      <template v-slot:footer>
          <div class="dialog-footer">
            <span>取消</span>
            <span>确定</span>
          </div>
      </template>
     
    </my-list>
  </div>
</template>

<script>
import myList from "./components/list";

export default {
  name: "App",
  components: {
    myList
  }
};
</script>

<style>

</style>
