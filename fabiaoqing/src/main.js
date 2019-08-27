import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/router'
import './plugins/vant';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
