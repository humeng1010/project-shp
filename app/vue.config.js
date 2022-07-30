const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验工具
  lintOnSave: false,
  // 代理跨域 我们本地的代理服务器向远程资源服务器请求(服务器与服务器之间不存在跨域问题，跨域只是浏览器的一种保护机制)然后我们本地接收本地收到的数据
  devServer: {
    proxy: {
      // 如果路径中带有/api就进行代理转发
      '/api': {
        target: "http://39.98.123.211:8510/",
        // pathRewrite: { '^api': '' }
      }
    }
  }

})
