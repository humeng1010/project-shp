<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
    <!-- <Footer
      v-show="$route.path === '/home' || $route.path === '/search'"
    ></Footer> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 因为app组件只加载一次 所以获取列表的请求在这里发出 可以减小服务器的压力
    this.getCategoryList();
  },
  methods: {
    ...mapActions("home", { getCategoryList: "categoryList" }),
  },
};
</script>

<style>
</style>