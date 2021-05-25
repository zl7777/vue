<template>
  <dl @click="goToDetail" :class="{'active':flag}">
    <dt>
      <img :src="img" alt>
    </dt>
    <dd>
      <h3>{{title}}</h3>
      <p>{{content}}</p>
      <p>{{time}}</p>
    </dd>
  </dl>
</template>
<script>
export default {
  props: ["title", "img", "content", "time", "id","flag"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
      goToDetail(){
          this.$router.push({name:'detail',params:{id:this.id}})
          this.$emit('changeFn',this.id)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
img {
  width: 100%;
  height: 200px;
}
dl.active{
    color: #ccc;
}
</style>