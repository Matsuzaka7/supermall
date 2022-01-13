<template>
  <div id="detail">
    <detail-nav-bar class="navbar"> </detail-nav-bar>
    <scroll class="detail-content" ref="detailScroll">
      <detail-swiper :s="s"></detail-swiper>
      <detail-shop-info :shop="s"></detail-shop-info>
      <detail-goods-info
        :detailInfo="s"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info :paramInfo="s"></detail-param-info>
      <detail-comment-info :commentInfo="s"></detail-comment-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";

import Scroll from "@/components/common/scroll/Scroll";
import { getDetail } from "@/network/detail.js";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
  },
  data() {
    return {
      // id: null,
      // topImage: "",
      s: "",
    };
  },
  created() {
    // this.id = this.$route.query.name;
    // this.topImage = this.$route.query.img;
    this.s = this.$route.query;
  },
  methods: {
    imageLoad() {
      this.$refs.detailScroll.refresh();
    },
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
}
.detail-content {
  height: calc(100% - 44px);
}

.navbar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>