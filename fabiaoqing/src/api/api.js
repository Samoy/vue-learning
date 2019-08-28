/**
 * @author Samoy
 * @email samoy_young@163.com
 * @date 2019/8/28
 */
import axios from "axios";
//获取所有类别
export let getCategories = axios.get('category/list');
