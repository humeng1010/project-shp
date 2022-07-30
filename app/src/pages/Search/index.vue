<template>
  <div>
    <h1>我是query---{{ $route.query.k }}</h1>
    <h1>我是query(通过路由组件配置props函数的形式传递的)---{{ k }}</h1>
    <h1>我是params---{{ $route.params.keyword }}</h1>
    <h1>我是params(通过路由组件配置props函数的形式传递的)---{{ keyword }}</h1>
    <!-- <h1>{{ a }}</h1> -->
  </div>
</template>

<script>
export default {
  props: ["k", "keyword"],
};
</script>

<style>
</style>