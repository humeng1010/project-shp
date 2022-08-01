<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex" @mouseenter="enterShow">
        <!-- 当鼠标离去全部商品分类的时候再移除背景色 -->
        <h2 class="all">全部商品分类</h2>
        <!-- 给过渡动画标签添加一个name就可以让css的v-...变为sort-... -->
        <transition name="sort">
          <div class="sort" v-show="show">
            <!-- 编程式导航+事件委派 -->
            <div class="all-sort-list2" @click="goSearch">
              <!-- 遍历categoryList 得到category 第一层 -->
              <div
                class="item"
                v-for="(c1, index) in categorylist"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
                @mouseenter="changeIndex(index)"
              >
                <!-- 大标题 -->
                <h3>
                  <!-- 这里不建议使用声明式导航，因为一次性创建太多的组件十分消耗内存 -->
                  <!-- <router-link to=""></router-link> -->
                  <!-- 单独使用编程式导航会给每一个都绑定到点击事件也不是很好 -->
                  <!-- 解决办法，给父元素添加点击事件进行事件委派+编程式导航 -->
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 展示区 -->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <!-- 遍历第二层从category.categoryChild中得到categoryC -->
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <!-- 遍历第三层 -->
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
// 引入lodash下的throttle
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      // 鼠标当前在那个分类上 默认哪个都不在为-1
      currentIndex: -1,
      show: true,
    };
  },
  // 组件挂载完毕:向服务器发请求
  mounted() {
    if (this.$route.path !== "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState("home", ["categoryList"]),
    ...mapGetters("home", ["categorylist"]),
  },
  methods: {
    // 鼠标移入触发回调(节流)
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 16),
    // 鼠标离去
    leaveIndex() {
      // 改变当前的Index值，隐藏背景色
      this.currentIndex = -1;
      if (this.$route.path !== "/home")
        // 隐藏search的商品分类
        this.show = false;
    },
    enterShow() {
      this.show = true;
    },
    // 跳转搜索路由
    goSearch(event) {
      // this.$router.push("/search");
      // console.log(event.target.dataset);
      // 这里注意浏览器会把驼峰命名给自动转换为小写 并且去掉data-
      let { categoryname, category1id, category2id, category3id } =
        event.target.dataset;

      let location = { name: "search" };
      let query = { categoryName: categoryname };
      if (categoryname) {
        if (category1id) {
          //一级菜单
          query.category1Id = category1id;
        } else if (category2id) {
          //二级菜单
          query.category2Id = category2id;
        } else if (category3id) {
          //三级菜单
          query.category3Id = category3id;
        }
      }
      location.query = query;
      this.$router.push(location);
    },
  },
};
</script>

<style lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 30px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background: #6cf;
        }
      }
    }
    // 过渡动画的样式
    // 过渡动画进入的开始
    .sort-enter {
      height: 0px;
    }
    // 过渡动画的结束状态
    .sort-enter-to {
      height: 461px;
    }
    // 定义动画的时间，速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>