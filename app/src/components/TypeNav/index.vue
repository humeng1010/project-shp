<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex">
        <!-- 当鼠标离去全部商品分类的时候再移除背景色 -->
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2">
            <!-- 遍历categoryList 得到category 第一层 -->
            <div
              class="item"
              v-for="(c1, index) in categoryLists"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
              @mouseenter="changeIndex(index)"
            >
              <!-- 大标题 -->
              <h3>
                <a href="">{{ c1.categoryName }}</a>
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
                      <a href="">{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <!-- 遍历第三层 -->
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a href="">{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { mapActions, mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      // 鼠标当前在那个分类上 默认哪个都不在为-1
      currentIndex: -1,
    };
  },
  // 组件挂载完毕:向服务器发请求
  mounted() {
    // 通知vuex发请求，获取数据，存储在仓库当中
    // this.$store.dispatch("home/categoryList");
    // this.categoryList();
    this.getCategoryList();
    // console.log(this);
  },
  computed: {
    ...mapState("home", ["categoryList"]),
    // 限制categoryList中的数组长度 防止超出盒子
    categoryLists() {
      return this.categoryList.splice(1, 15);
    },
  },
  methods: {
    ...mapActions("home", { getCategoryList: "categoryList" }),
    // 鼠标移入触发回调
    changeIndex(index) {
      this.currentIndex = index;
      // console.log(this.currentIndex);
    },
    leaveIndex() {
      this.currentIndex = -1;
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
  }
}
</style>