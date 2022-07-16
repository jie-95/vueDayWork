<template>
  <div>
    <span v-for="(item, index) in arr" :key="index">
      <input type="checkbox" :value="item" v-model="num"/><span>{{ item }} /</span>
    </span>
    <p>您选中的元素，累加和为：{{sum}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      num:[]
    };
  },
  computed:{
    
    sum(){
      console.log(this.num);
      return this.num.reduce((sum,next) => {
        return sum += next
      },0)
    }
  }
};
</script>

<style></style>
