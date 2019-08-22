import Vue from 'vue'
import Vuex from 'vuex'
import {computed} from "./modules/count";
import {mutations} from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    computed
  },
  mutations
})
