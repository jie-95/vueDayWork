import Vue from 'vue'
import App from './App.vue'

import DingDan from "./components/DingDan.vue"
import ShouYe from "./components/ShouYe.vue"
import FenLei from "./components/FenLei.vue"
import MyMy from "./components/MyMy.vue"

import VueRouter from "vue-router";
Vue.use(VueRouter)
const route = [
  {
    path: "/shouye",
    component:ShouYe
  },
  {
    path: "/fenlei",
    component:FenLei
  },
  {
    path: "/dingdan",
    component:DingDan
  },
  {
    path: "/my",
    component:MyMy
  },
] 
const routers = new VueRouter({
  routes : route ,
})

Vue.config.productionTip = false

new Vue({
  router : routers,
  render: h => h(App),
}).$mount('#app')
