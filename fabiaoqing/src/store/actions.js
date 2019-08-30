/**
 * @author Samoy
 * @email samoy_young@163.com
 * @date 2019/8/28
 */
import {GET_CATEGORIES, GET_PACKAGE_DETAIL, GET_PACKAGES} from "./mutation-types";
import {getCategories, getPackageDetail, getPackages} from "../api/api";

export let actions = {
  async [GET_CATEGORIES]({commit}) {
    commit(GET_CATEGORIES, await getCategories());
  },
  async [GET_PACKAGES]({commit}, {
    categoryId, page = 1, pageSize = 10
  }) {
    commit(GET_PACKAGES, await getPackages(categoryId, page, pageSize))
  },
  async [GET_PACKAGE_DETAIL]({commit}, {packageId}) {
    commit(GET_PACKAGE_DETAIL, await getPackageDetail(packageId));
  }
};
