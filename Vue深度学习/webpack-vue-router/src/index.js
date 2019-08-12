import Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";
Vue.use(VueRouter);

var vm = new Vue({
  el: "#app",
  render: h => h(App),
  router
});
