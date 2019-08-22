/**
 * @author Samoy
 * @email samoy_young@163.com
 * @date 2019/8/22
 */
import {ADD, MINUS} from "./mutation-types";

export let mutations = {
  [ADD](state, num) {
    state.computed.count += num;
  },
  [MINUS](state, num) {
    state.computed.count -= num;
  }
};
