<template>
  <div>
    <div class="title">
      <h3>{{title}}</h3>
      <span>{{list[type-1]}}</span>
    </div>
    <p>{{content}}</p>
    <div class="time">
      <span>面试时间:{{time}}</span>
      <span>{{bool?'已提醒':'未提醒'}}</span>
    </div>
  </div> 
</template>

<script>
export default {
  props: ["title", "content", "time", "type", "bool"],
  data(){
      return {
           list:["未开始", "已打卡", "已放弃", "全部"],
      }
  }
};
</script>


<style scoped>
p {
  padding: 10px;
  box-sizing: border-box;
}
.title,
.time {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
}
</style>
