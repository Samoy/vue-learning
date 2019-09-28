import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About';
import PackageDetail from "../views/PackageDetail";
import Search from "../views/Search";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/package/detail',
      name: 'packageDetail',
      component:PackageDetail
    },
    {
      path: '/search',
      name: 'search',
      component:Search
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})
