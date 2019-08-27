/**
 * @author Samoy
 * @email samoy_young@163.com
 * @date 2019/8/22
 */
import * as types from './types/mutation-types';

function makeAction(type) {
  return ({commit}, ...args) => commit(type, ...args)
}

let actions = {};

Object.values(types).forEach((item) => {
  actions[item] = makeAction(item)
});

export default actions;
