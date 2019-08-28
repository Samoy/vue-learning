/**
 * @author Samoy
 * @email samoy_young@163.com
 * @date 2019/8/28
 */
import {GET_CATEGORIES, GET_PACKAGES} from "./mutation-types";
import {getCategories, getPackages} from "../api/api";

export let actions = {
  async [GET_CATEGORIES]({commit}) {
    commit(GET_CATEGORIES, await getCategories());
  },
  async [GET_PACKAGES]({commit}, categoryId) {
    commit(GET_PACKAGES, await getPackages(categoryId))
  }
};
