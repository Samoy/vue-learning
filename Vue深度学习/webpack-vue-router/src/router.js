import Account from "./components/Account.vue";
import GoodsList from "./components/GoodsList.vue";
import Login from "./components/sub/Login.vue";
import Register from "./components/sub/Register.vue";
import VueRouter from "vue-router";

var router = new VueRouter({
  routes: [
    {
      path: '/account',
      component: Account,
      children: [
        {
          path: 'login',
          component: Login
        },
        {
          path: 'register',
          component: Register
        }
      ]
    },
    {
      path: '/goods_list',
      component: GoodsList
    }
  ]
});

export default router;
