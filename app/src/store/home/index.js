import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api';
// home模块数据仓库
const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList({ commit }) {
        const res = await reqCategoryList();
        // console.log(res);
        if (res.code === 200) {
            commit('CATEGORYLIST', res.data)
        }

    },

    // 获取首页轮播图的数据
    async getBannerList({ commit }) {
        let res = await reqGetBannerList();
        // console.log(res);
        if (res.code === 200) {
            commit("GETBANNERLIST", res.data)
        }
    },

    // 获取楼层轮播图
    async getFloorList({ commit }) {
        let res = await reqFloorList();
        if (res.code === 200)
            commit("GETFLOORLIST", res.data)
    }



}
const mutations = {
    // 修改商品列表
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    // 修改banner图
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
}
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],

}
const getters = {
    // 限制categoryList中的数组长度 防止超出盒子
    categorylist(state) {
        return state.categoryList.splice(1, 15);
    }

}
export default {
    namespaced: true,//开启命名空间
    actions,
    mutations,
    state,
    getters
}