import Vue from "vue";
import App from "./App.vue";
import "@/assets/flexible.js";
import "@/assets/reset.css";

//引入路由
import router from "./router/index";

// Api 444444444444444444444444444444 测试
// import { recommendSongListApi } from "@/api";
// recommendSongListApi({
//   limit: 6,
// }).then((res) => {
//   console.log(res);
// });

//引入Vant
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Col,
  Row,
  Image as VanImage,
  Cell,
  CellGroup,
  Icon,
  Search,
} from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
