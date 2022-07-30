// 对于axios进行二次封装
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress';
// 引入进度条的样式
import "nprogress/nprogress.css";
// start:进度条开始 done:进度条结束

// 利用axios对象的方法create，去创建一个axios实例
// request就是axios，只不过我们可以配置axios并生成request实例
const requests = axios.create({
    // 配置对象
    // 接口当中路径都带有/api
    // 基础路径
    baseURL: "/api",
    // 请求超时的时间5s
    timeout: 5000

})

// 请求拦截器，在请求发出之前可以拦截到，对其进行一些处理
requests.interceptors.request.use((config) => {
    // config配置对象，里面有一个属性很重要，header请求头
    // 进度条开始
    nprogress.start();
    return config
})
// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数
    // 进度条结束
    nprogress.done();
    return res.data
}, (error) => {
    // 服务器响应失败的回调函数
    return Promise.reject(new Error('fail'))
})

// 对外暴露
export default requests