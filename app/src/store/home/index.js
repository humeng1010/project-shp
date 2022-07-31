import { reqCategoryList } from '@/api';
// home模块数据仓库
const actions = {
    // 通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList({ commit }) {
        const res = await reqCategoryList();
        // console.log(res);
        if (res.code === 200) {
            commit('CATEGORYLIST', res.data)
        }

    }

}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }

}
const state = {
    categoryList: []

}
const getters = {

}
export default {
    namespaced: true,//开启命名空间
    actions,
    mutations,
    state,
    getters
}