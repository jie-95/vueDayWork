<template>
  <div>
    <ul>
      <li v-for='item in list' :key='item'>{{item}}</li>
    </ul>
    <button @click='walk'>走一走</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:['美女','帅哥','程序员']
    }
  },
  methods: {
    walk(){
      this.list.push(this.list.shift())
      
    }
  }

}
</script>

<style>

</style>