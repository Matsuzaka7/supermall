<template>
  <!-- 此处的tab-bar对应TabBar组件，用于替换TabBar组件的插槽 -->
  <tab-bar>
    <!-- 此处的tab-bar-item对应TabBarItem组件，用于替换里面的插槽 -->
    <tab-bar-item path="/home" activeColor="pink">
      <!-- 这两个具名插槽替换tab-bar-item立面的图片和文本 -->
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
// TabBar是 下面一行最大的box，用于装小的组件的盒子
import TabBar from "../../common/tabbar/TabBar.vue";
// TabBarItem是 一个个小的组件，用于放进tabBar里的
import TabBarItem from "../../common/tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>