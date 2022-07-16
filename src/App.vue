<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="Nname" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="Nage" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="Nsex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="add">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button :value="item" @click="del(index)">删除</button>
            <button @click="edi(index)">编辑</button>
          </td>
        </tr>
      </table>
      <div>{{ Nname }}</div>
      <div>{{ Nage }}</div>
      <div>{{ Nsex }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "Tom",
          age: 18,
          sex: "男",
        },
        {
          name: "Jerry",
          age: 119,
          sex: "男",
        },
        {
          name: "Dogge",
          age: 18,
          sex: "女",
        },
      ],
      Nname: "",
      Nage: "",
      Nsex: "男",
      Arr1: {},
      id: 1,
      status: false,
    };
  },
  methods: {
    add() {
      console.log(this.arr);
      let obj = { name: this.Nname, age: this.Nage, sex: this.Nsex };
      //  console.log(obj);
      if (!this.status) {
        this.arr.push(obj);
      } else {
        this.arr.splice(this.id, 1, obj);
        this.Nname = "";
        this.Nage = "";
        this.Nsex = "男";
      }
    },
    del(val) {
      // console.log(val);
      this.arr.splice(val, 1);
    },
    edi(val) {
      console.log(this.arr[val]);
      console.log(this.arr[val].status);
      this.arr[val].status = 10;
      this.Nname = this.arr[val].name;
      this.Nage = this.arr[val].age;
      this.Nsex = this.arr[val].sex;
      // this.arr.splice(val, 1)
      this.id = val;
      this.status = true;
    },
  },
};
</script>
