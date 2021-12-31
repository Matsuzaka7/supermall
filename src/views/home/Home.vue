<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <goods-list :goods="goods"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home.js";

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
            name: "001",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$199.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a2: {
            name: "002",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$299.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a3: {
            name: "003",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$399.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a4: {
            name: "004",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$499.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a5: {
            name: "005",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$599.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a6: {
            name: "006",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$699.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a7: {
            name: "007",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$799.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a8: {
            name: "008",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$899.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a9: {
            name: "009",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$999.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a10: {
            name: "010",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$1099.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a11: {
            name: "011",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$1199.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
          a12: {
            name: "012",
            img: "https://z3.ax1x.com/2021/05/28/2F1qUS.png",
            price: "$1299.00",
            cfay: 10000,
            href: "https://space.bilibili.com/108279272?spm_id_from=333.788.0.0",
          },
        },
      },
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
  },
  created() {
    // 在组件创建完成就发送请求
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
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

<style>
#home {
  margin-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  background-color: #fff;
  top: 44px;
}

ul li {
  height: 50px;
  border-radius: 5px;
  background-color: tomato;
  margin: 0 10px;
  margin-bottom: 5px;
  line-height: 50px;
  color: white;
  font-weight: 100;
  text-indent: 1em;
}
</style>