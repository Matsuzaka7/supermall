<template>
  <div class="tab-control">
    <!-- 这里展示的是文字因此没必要使用插槽 -->
    <div
      v-for="(item, index) in titles"
      :key="item.index"
      class="tab-control-item"
      :class="{ active: index == currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style>
.tab-control {
  text-align: center;
  display: flex;
  font-size: 14px;
  z-index: 10;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  height: 44px;
  line-height: 44px;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>