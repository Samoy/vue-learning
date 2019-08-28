/**
 * @author Samoy
 * @email samoy_young@163.com
 * @date 2019/8/28
 */
import {GET_CATEGORIES} from "./mutation-types";

export let mutations = {
  [GET_CATEGORIES](state, res) {
    state.category.list = res.data.data
  }
};
