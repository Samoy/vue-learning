/**
 * @author Samoy
 * @email samoy_young@163.com
 * @date 2019/8/28
 */
import {GET_CATEGORIES} from "./mutation-types";
import {getCategories} from "../api/api";

export let actions = {
  async [GET_CATEGORIES]({commit}) {
    commit(GET_CATEGORIES, await getCategories);
  }
};
