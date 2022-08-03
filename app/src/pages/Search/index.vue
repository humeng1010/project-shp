<template>
  <div>
    <TypeNav></TypeNav>
    {{ keyword }}--{{ $route.query }}
  </div>
</template>

<script>
export default {
  // 通过props配置项获取路由跳转的keyword关键字参数
  props: ["keyword"],
};
</script>

<style>
</style>