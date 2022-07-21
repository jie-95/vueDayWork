<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        
        <slot name="header"></slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="(item,index) in list" :key="item.id">
        <!-- <td>{{item.id}}</td>
        <td>{{item.goods_name}}</td>
        <td>{{item.goods_price}}</td>
        <td>{{item.inputVisible}}</td>
        <td>{{item.tags}}</td>
        <td>
          <button type="button" class="btn btn-danger">删除</button>
        </td> -->
        <slot name="content" :row="item" :index="index"></slot>
        
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props:{
    list:{
      type:Array,
      default:() => []
    }
  },
  name: 'MyTable'
}
</script>


<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>