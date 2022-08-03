## mockjs的使用

1. 安装```npm i mockjs```

2. 在src文件夹下创建mock文件夹

3. 创建json文件模拟数据

4. 把mock数据需要的图片放到public文件夹中(在打包的时候会原封不动的放到dist文件夹中)

5. 创建mockServe.js通过mock插件来模拟数据

6. 将mockServe.js文件在入口文件中引入(至少需要执行一次，才能模拟数据)