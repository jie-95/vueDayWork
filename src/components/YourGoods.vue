<template>
  
    <tr>
      <td><input type="checkbox" v-model="checked" @change="change(checked)" /></td>
      <td>{{ obj.name }}</td>
      <td>{{ obj.price }}</td>
      <td><button>-</button>{{ obj.num }}<button @click="btnadd">+</button></td>
      <td>{{}}</td>
      <td><button>删除</button></td>
    </tr>
 
</template>

<script>
export default {
  name:"YourGoods",
  data(){
    return{
      checked:"",
      numb:""
    }
  },
  props: ['index','obj'],
    
  methods:{
    change(val){
      // console.log(val);
      this.$emit("changeFn",val,this.index)
    },
    btnadd(val){
      // console.log(this.obj.num);
      this.$emit("addFn",val,this.index)
    
      
    }
  }
};
</script>

<style></style>
