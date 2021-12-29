<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    // path是props里面自己定义的属性，用来接收点击item的路径的
    path: String,
    activeColor: {
      // path接收了 MainTabBar传递的activeColor属性值，如果没有接收到，就使用默认值red
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive() {
      // 该路由路径的path是否和点击获取的path相等;
      // return this.$route.path.indexOf(this.path) !== -1;
      return this.$route.path == this.path;
    },
    activeStyle() {
      // 如果路由相等的话就把颜色改成this.activeColor的颜色
      return this.isActive ? { color: this.activeColor } : "";
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch((err) => {});
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: red;
}
</style>