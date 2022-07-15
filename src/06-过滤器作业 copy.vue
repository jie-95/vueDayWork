<template>
  <div>
    <div>
      国内网站：粉丝数量:{{num | wan(num)}}万
    </div>
    <div>
      国外网站：粉丝数量:{{num | qian(num)}}千
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:18736986
    }
  },
  filters:{
    wan:(num) => {
      return  num/10000
    },
    qian:(num) => {
      return  num/1000
    },
  }

}
</script>

<style>

</style>