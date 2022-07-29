// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入路由
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
// 使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/search",
            component: Search,
            meta: { show: true }
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { show: false }
        },
        // 重定向,当访问根目录的时候直接重定向到home页
        {
            path: '*',
            redirect: "/home"
        }

    ]
})