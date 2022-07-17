<template>
  <div class="dog">
    <img src="../assets/dog1.jpg" alt="">
    <h1>{{ title ||"这是一条可爱的边牧"}}</h1>
  </div>

</template>

<script>
export default {
    props: ['title']

}
</script>

<style scoped>

img {
  width: 300px;
  height: 300px;

}
h1 {
  width: 300px;
  text-align: center;
  color: orange;
}


</style>