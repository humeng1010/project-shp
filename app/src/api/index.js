// 这个模块：API接口进行统一管理
// API接口
import requests from './request';

// 引入mock发请求封装的的ajax
import mockRequests from './mockAjax';

// 三级联动接口
// /api/product/getBaseCategoryList get 无参数
// 发请求:axios发请求返回的是Promise对象
export const reqCategoryList = () => requests({ method: "GET", url: "/product/getBaseCategoryList" })

// 获取banner(mock)
export const reqGetBannerList = () => mockRequests.get("/banner");

// 获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");