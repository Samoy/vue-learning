/**
 * @author Samoy
 * @email samoy_young@163.com
 * @date 2019/8/28
 */
import {GET_CATEGORIES, GET_PACKAGES} from "./mutation-types";

export let mutations = {
  [GET_CATEGORIES](state, list) {
    state.category.list = list;
  },
  [GET_PACKAGES](state, list) {
    state.packages.list = list;
  }
};
