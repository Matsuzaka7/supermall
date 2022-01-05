<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>

    <scroll
      class="content"
      ref="HomeScroll"
      :probeType="2"
      :pullUpLoad="true"
      @scroll="contentClick"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";
import { debounce } from "@/common/utils.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        /* pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }, */
        aCount: {
          a1: {
            name: "流行001",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$199.00",
            cfay: 10032,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a2: {
            name: "流行002",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$299.00",
            cfay: 54,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a3: {
            name: "流行003",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$399.00",
            cfay: 874,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a4: {
            name: "流行004",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$499.00",
            cfay: 963,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a5: {
            name: "流行005",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$599.00",
            cfay: 725,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a6: {
            name: "流行006",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$699.00",
            cfay: 73,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a7: {
            name: "流行007",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$799.00",
            cfay: 3975,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a8: {
            name: "流行008",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$899.00",
            cfay: 97,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a9: {
            name: "流行009",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$999.00",
            cfay: 937,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a10: {
            name: "流行010",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$1099.00",
            cfay: 635,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a11: {
            name: "流行011",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$1199.00",
            cfay: 65,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a12: {
            name: "流行012",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$1299.00",
            cfay: 5218,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
        },
        bCount: {
          b1: {
            name: "新款001",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$169.00",
            cfay: 1528,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b2: {
            name: "新款002",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$255.00",
            cfay: 8624,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b3: {
            name: "新款003",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$394.00",
            cfay: 5682,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b4: {
            name: "新款004",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$559.00",
            cfay: 472,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b5: {
            name: "新款005",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$859.00",
            cfay: 957,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b6: {
            name: "新款006",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$6449.00",
            cfay: 75621,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b7: {
            name: "新款007",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$599.00",
            cfay: 8627,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b8: {
            name: "新款008",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$869.00",
            cfay: 1538,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b9: {
            name: "新款009",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$529.00",
            cfay: 9382,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b10: {
            name: "新款010",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$559.00",
            cfay: 82,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b11: {
            name: "新款011",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$1199.00",
            cfay: 2892,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          b12: {
            name: "新款012",
            img: "http://matsuzaka.3vfree.cn/shabi.jpg",
            price: "$139.00",
            cfay: 97547,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
        },
        cCount: {
          c1: {
            name: "精选001",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$235.00",
            cfay: 115,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c2: {
            name: "精选002",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$299.00",
            cfay: 521,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c3: {
            name: "精选003",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$399.00",
            cfay: 852,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c4: {
            name: "精选004",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$519.00",
            cfay: 965,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c5: {
            name: "精选005",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$599.00",
            cfay: 89547,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c6: {
            name: "精选006",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$85.00",
            cfay: 89654,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c7: {
            name: "精选007",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$514.00",
            cfay: 6985,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c8: {
            name: "精选008",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$2114.00",
            cfay: 53652,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c9: {
            name: "精选009",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$5874.00",
            cfay: 5698,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c10: {
            name: "精选010",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$4485.00",
            cfay: 786,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c11: {
            name: "精选011",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$1559.00",
            cfay: 1254,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          c12: {
            name: "精选012",
            img: "https://s4.ax1x.com/2022/01/02/TTFljS.jpg",
            price: "$185.00",
            cfay: 85654,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
        },
      },
      currentType: "aCount",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType];
    },
  },
  created() {
    // 在组件创建完成就发送请求
    // 请求轮播图
    this.getHomeMultidata();
    // 请求商品数据
    // this.getHomeGoods("aCount");
    // this.getHomeGoods("bCount");
    // this.getHomeGoods("cCount");
    // this.getGoods("aCount");
    // this.getGoods("bCount");
    // this.getGoods("cCount");
  },
  mounted() {
    const refresh = debounce(this.$refs.HomeScroll.refresh, 500);

    // 监听图片图片加载完成
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });

    setTimeout(() => {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }, 500);
  },
  methods: {
    // 事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "aCount";
          break;
        case 1:
          this.currentType = "bCount";
          break;
        case 2:
          this.currentType = "cCount";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      // 直接通过$refs 访问组件内的scrollTo方法
      this.$refs.HomeScroll.scrollTo(0, 0, 500);
    },
    contentClick(position) {
      // 判断backTop是否显示
      this.isShowBackTop = -position.y > 400;

      // 决定tabControl是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    pullingUp() {
      console.log("下拉加载成功");
      this.$refs.HomeScroll.finishPullUp();
    },
    getGoods(type) {
      console.log(this.goods[type]);
    },

    // 网络请求的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // 取出原来的page+1,每次请求就是下一页的数据了
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

/* .tab-control {
  position: sticky;
  background-color: #fff;
  top: 44px;
} */
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
}
/* .content {
  height: calc(100% - 93px);
} */

.tab-control {
  position: relative;
  z-index: 9;
}
</style>