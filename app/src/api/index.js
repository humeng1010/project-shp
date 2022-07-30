// 这个模块：API接口进行统一管理
import requests from './request';

// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
// 发请求:axios发请求返回的是Promise对象
export const reqCategoryList = () => requests({ method: "GET", url: "/product/getBaseCategoryList" })

