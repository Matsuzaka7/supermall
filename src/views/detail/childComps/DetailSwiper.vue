<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="item in s.img" :key="item.index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
    <detail-base-info :querys="s"></detail-base-info>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
import DetailBaseInfo from "../childComps/DetailBaseInfo.vue";
export default {
  name: "Detailswiper",
  components: {
    Swiper,
    SwiperItem,
    DetailBaseInfo,
  },
  data() {
    return {
      id: null,
      topImage: "",
    };
  },
  props: {
    s: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>