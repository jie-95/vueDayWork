<template>
  <div>
    <h1>一级嵌套</h1>
    <router-link to="/two1">TWO1</router-link>
    <router-link to="/two2">TWO2</router-link>
    <router-link to="/two3">TWO3</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>