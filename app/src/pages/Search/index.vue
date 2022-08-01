<template>
  <div>
    <TypeNav></TypeNav>
    {{ categoryName }}
  </div>
</template>

<script>
export default {
  props: ["categoryName"],
};
</script>

<style>
</style>