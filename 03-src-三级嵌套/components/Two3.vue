<template>
  <div>
    <h2>二级嵌套</h2>
    <!-- <router-link class="content" id="1" to="/two3/content1">content1</router-link><br>
    <router-link class="content" id="2" to="/two3/content2">content2</router-link><br>
    <router-link class="content" id="3" to="/two3/content3">content3</router-link><br> -->
    <span class="content" @click="btn('/two3', 'content1')">content1</span><br>
    <span class="content" @click="btn('/two3', 'content2')">content2</span><br>
    <span class="content" @click="btn('/two3', 'content3')">content3</span><br>
    <span class="content" @click="btn1(Math.floor(Math.random()*3 +1))">随机</span>
    <!-- <button @click="btn(Math.floor(Math.random()*3 +1))">随机</button> -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Cname: ['content1', 'content2', 'content3'],
    };
  },
  methods: {
    btn(path,name){
      this.$router.push({
        name: name,
      });
    },
    btn1(val) {
      this.$router.push({
        name: this.Cname[val],
      });
    },
  },
};
</script>
<style  scoped>
.content {
  display: inline-block;
  border: 5px solid #ccc;
  margin-bottom: 30px;
  cursor: pointer;
}
</style>