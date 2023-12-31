// 入口文件
import Vue from "vue";
import App from "./App.vue";
import './styles/global.less';
import router from "@/router"

import Message from "./utils/Message";
Vue.prototype.$Message = Message;


import "@/mock/article.js"



const vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");