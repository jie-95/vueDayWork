import Vue from 'vue'
import App from './App.vue'

import TiYu from "./components/TiYu.vue"
import ZhuYe from "./components/ZhuYe.vue"
import XinWen from "./components/XinWen.vue"
import Spot from "./views/Spot.vue"
import Spot1 from "./views/Spot1.vue"
import Spot2 from "./views/Spot2.vue"

import VueRouter from "vue-router";
Vue.use(VueRouter)
const route = [
  {
    path: "/zhuye",
    component:ZhuYe
  },
  {
    path: "/xinwen",
    component:XinWen
  },
  {
    path: "/tiyu",
    component:TiYu,
    children:[
      {
        path:'spot',
        component:Spot
      },
      {
        path:'spot1',
        component:Spot1
      },
      {
        path:'spot2',
        component:Spot2
      }
    ]
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
