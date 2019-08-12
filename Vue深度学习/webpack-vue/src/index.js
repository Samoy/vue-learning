import Vue from 'vue';
import Login from './login.vue';

var vm = new Vue({
  el: "#app",
  data: {
    msg: '123'
  },
  render: h => h(Login)
});
