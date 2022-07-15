<template>
  <div>
    <div>
      选择所在地：
      <input type="radio" v-model="city" value="中国大陆" />中国大陆
      <input type="radio" v-model="city" value="中国香港" />中国香港
    </div>
    <div>
      手机号码：
      <input type="text" v-model.trim="phone" />
    </div>
    <div>
      年龄：
      <input type="text" v-model.number="age" />
    </div>
    <div>
      密码：
      <input type="password" v-model.trim="password" />
    </div>
    <div>
      爱好：
      <input type="checkbox" v-model="hobby" value="看书" />看书
      <input type="checkbox" v-model="hobby" value="写字" />写字
      <input type="checkbox" v-model="hobby" value="打游戏" />打游戏
    </div>
    <div>
      <input type="checkbox" v-model="log" value="打游戏" />
      记住密码<br>
      ==================================================<br>
    地区：{{city}}<br>
    phone:{{phone}}<br>
    age:{{age}}<br>
    psw:{{password}}<br>
    hobby:{{hobby}}<br>
    log:{{log}}<br>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: [],
      phone:'',
      age:'',
      password:'',
      hobby:[],
  log:''
    }
  },
}
</script>

<style></style>
