import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router';
// 全局组件
import TypeNav from '@/pages/Home/TypeNav';
// 第一个参数：组件的名字，第二个参数：组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
}).$mount('#app')
