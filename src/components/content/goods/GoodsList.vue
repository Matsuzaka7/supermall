<template>
  <div class="goods">
    <goods-list-item
      v-for="item in goods.aCount"
      :key="item.index"
      :goods-item="item"
      class="gli"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  data() {
    return {};
  },
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5px;
}

.gil {
}
</style>