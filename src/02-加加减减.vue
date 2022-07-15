<template>
  <div>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item}} <button @click="del(index)">删除</button></li>
    </ul>
    <button @click="rander">添加</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr:['1',]
    }
  },
  methods: {
    rander(){
      this.arr.push(parseInt(Math.random()*20))
    },
    del(val){
      console.log(val);
      /* const a =  this.arr.findIndex((ele)=>ele == val)
      this.arr.splice(a,1) */
      this.arr.splice(val,1)
    }
  },
  filters:{
    
  }

}
</script>

<style>

</style>