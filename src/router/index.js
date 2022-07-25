//配置路由
import Vue from "vue"
import VueRouter from "vue-router"

import Layout from "@/views/Layout"
import Play from "@/views/Play"
import Home from "@/views/Home/index.vue"
import Search from "@/views/Search/index.vue"

Vue.use(VueRouter)
//配置路由规则
const routes = [
  {
    path:"/",
    redirect:"/layout",
  },
  {
    path:"/layout",
    component:Layout,
    redirect:"/layout/home",
    children:[
      {
        path:"home",
        component:Home,
        meta:{
          title:"首页"
        }
      },
      {
        path:"search",
        component:Search,
        meta:{
          title:"搜索"
        }
      }
    ]
  },
  {
    path:"/play",
    component:Play,
  }
]

const router = new VueRouter({
    routes
})

export default router 
