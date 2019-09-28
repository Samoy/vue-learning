/**
 * @author Samoy
 * @email samoy_young@163.com
 * @date 2019/8/28
 */
import axios from "axios";
import {Toast} from "vant";

axios.defaults.timeout = 60 * 1000;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(config => {
  if (config.data.code !== 10000) {
    Toast.fail({duration: 1000, message: config.data.message});
  } else {
    Toast.clear();
  }
  return config.data.data;
}, error => {
  Toast.fail({
    duration: 1000,
    message: "网络请求失败"
  });
  return Promise.reject(error);
});
//获取所有类别
export let getCategories = () => axios.get('/category/list');
//根据类别获取表情包
export let getPackages = (categoryId, page, pageSize) => axios.get(`/package/list?categoryId=${categoryId}&page=${page}&pageSize=${pageSize}`);
//根据id获取表情包详情
export let getPackageDetail = (packageId) => axios.get(`/package/list/detail?id=${packageId}`);
//根据关键字获取表情包
export let searchPackages = (keyword, page, pageSize) => axios.get(`/package/list/search?keyword=${keyword}&page=${page}&pageSize=${pageSize}`);
