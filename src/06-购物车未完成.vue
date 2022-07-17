<template>
  <div>
    <table
      border="1"
      width="700"
      style="border-collapse: collapse"
    >
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="checked"/> <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <Goods 
            v-for="(item, index) in goodList" 
            :key="index"
            :obj="item"
            :index="index"
            v-on:changeFn="changeFn"
            v-on:addFn="addFn"
        />
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">
            
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Goods from "./components/YourGoods.vue"
export default {
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  components:{
    Goods
  },
  methods: {
    changeFn(val,a){
        console.log(val,a);
        this.goodList[a].checked = val
    },
    addFn(val,a){
        console.log(val,a);
    this.goodList[a].num++
        // console.log(this.num);
    },
    //全选
    
  },
  watch:{
    
  }
};
</script>

<style>
</style>