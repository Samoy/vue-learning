/**
 * @author Samoy
 * @email samoy_young@163.com
 * @date 2019/8/22
 */
import {ADD, MINUS} from "./mutation-types";

export const add = makeAction(ADD);
export const minus = makeAction(MINUS);

function makeAction(type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}
