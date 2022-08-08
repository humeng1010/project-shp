<template>
  <div>
    <!-- 引入三级联动(全局组件) -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor
      v-for="(floor, index) in floorList"
      :key="floor.id"
      :list="floor"
    ></Floor>
    <Brand></Brand>
    <!-- 测试vuex -->
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // 派发action获取floor组件的数据
    this.getFloorList();
  },
  methods: {
    ...mapActions("home", ["getFloorList"]),
  },
  computed: {
    ...mapState("home", ["floorList"]),
  },
};
</script>

<style>
</style>