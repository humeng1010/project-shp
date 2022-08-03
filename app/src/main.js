import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router';
// 全局组件
import TypeNav from '@/components/TypeNav';
// 第一个参数：组件的名字，第二个参数：组件
Vue.component(TypeNav.name, TypeNav)
// 引入vuex仓库
import store from './store';
// 引入mockServe.js----mock数据
import "@/mock/mockServe"

// 测试接口
// import { reqCategoryList } from '@/api';
// reqCategoryList()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由 组件身上都会多了一个$route(该组件的路由-有几个路由组件就有几个)和$router(总的路由器-只有一个)属性
  router,
  // 注册仓库 组件实例身上会多了一个属性$store属性
  store,
}).$mount('#app')
