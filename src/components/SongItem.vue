<template>
  <div>
    <!-- <van-cell-group v-for="item in reList" :key="item.id"> -->
      <van-cell 
      :title="name" 
      center 
      :label="`${name}-${author}`">
        <template #right-icon>
          <van-icon name="play-circle-o" size="0.6rem" />
        </template>
      </van-cell>
    <!-- </van-cell-group> -->
  </div>
</template>

<script>

export default {
    props:{
        name:String,
        author:String,
        id:Number
    }

}
</script>

<style>

</style>