<template>
  <div>
    <h1>
    体育-改变人生
    </h1>
    <router-link to="/tiyu/spot">体育主页</router-link>
    <router-link to="/tiyu/spot1">国内体育</router-link>
    <router-link to="/tiyu/spot2">国外体育</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .router-link-active{
    background-color: brown;
  }
</style>