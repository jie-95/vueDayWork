import Vue from 'vue'
import App from './App.vue'

//引入bootstrap
import "bootstrap/dist/css/bootstrap.css"

//引入字体图标
import "./assets/fonts/iconfont.css"


//引入axios
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn"
Vue.prototype.$axios = axios

Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
