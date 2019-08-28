import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from "./mutations";
import {actions} from "./actions";
import {category} from "./modules/category";
import {packages} from "./modules/packages";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category,
    packages
  },
  mutations,
  actions,
})
