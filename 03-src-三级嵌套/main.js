import Vue from "vue";
import App from "./App.vue";

import Two1 from "./components/Two1.vue";
import Two2 from "./components/Two2.vue";
import Two3 from "./components/Two3.vue";
import Content1 from "./views/content1.vue"
import Content2 from "./views/content2.vue"
import Content3 from "./views/content3.vue"

Vue.config.productionTip = false;

//1.引入router
import VueRouter from "vue-router";
//2.vue使用
Vue.use(VueRouter);
//3.规则
const route = [
  {
    path: "/",
    redirect: "/two1",
  },
  {
    path: "/two1",
    component: Two1,
  },
  {
    path: "/two2",
    component: Two2,
  },
  {
    path: "/two3",
    component: Two3,
    children: [
      {
        path: "/",
        redirect: "/two3/content2",
      },
      {
        path: "content1",
        name:"content1",
        component: Content1,
      },
      {
        path: "content2",
        name:"content2",
        component: Content2,
      },
      {
        path: "content3",
        name:"content3",
        component: Content3,
      },
      
    ],
  },
];

const routers = new VueRouter({
  routes: route,
});

const vm = new Vue({
  router: routers,
  render: (h) => h(App),
}).$mount("#app");
console.log(vm);
