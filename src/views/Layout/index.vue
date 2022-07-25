<template>
  <div>
    <van-nav-bar
      :title="$route.meta.title"
      
    />

    <div>
      <router-view></router-view>
    </div>
    <van-tabbar route>
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
 /*  data(){
    return{
      title: "首页"
    }
  },
  mounted(){
    console.log(this.$route);
  },
  watch:{
    $route (val){
      this.title = val.meta.title
    }
  } */
};
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>