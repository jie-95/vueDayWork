<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item.name}} 
        <button @click="JS(index)">Buy</button>
        </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <!-- 遍历的数据 -->
      <tr v-for="(item,index) in arr" :key="index" >
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.count}}</td>
        <td>{{item.count*item.price}}</td>
      </tr>
    </table>
    <p>总价格为: {{all}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all:0,
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
    };
  },
  methods: {
    JS(val){
      // console.log(val);
      this.arr[val].count++;
      //总价计算
       
     this.all = this.arr.reduce((sum,obj) => {
        return sum += obj.count*obj.price
       },0)
    },


  }
};
</script>