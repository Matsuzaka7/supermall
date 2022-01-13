<template>
  <div class="goods-item" @click="itemClick">
    <a href="javascript:;">
      <img :src="goodsItem.img" @load="imgLoad" alt="" />
      <div class="goods-info">
        <p>{{ goodsItem.name }}</p>
        <span class="price">{{ goodsItem.price }}</span>
        <span class="collect">{{ goodsItem.cfay }}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      // 跳转详情页
      // this.$router.push("/Detail" + this.goodsItem);
      this.$router.push({
        path: "/Detail",
        query: {
          name: this.goodsItem.name,
          img: [this.goodsItem.img, this.goodsItem.img],
          price: this.goodsItem.price,
          cfay: this.goodsItem.cfay,
          href: this.goodsItem.href,
          state: ["销量", "收藏", "退货补运费"],
          courierImage: "http://matsuzaka.3vfree.cn/gou.jpg",
          courier: ["七天无理由退货", "72小时发货"],
          score: JSON.stringify([
            { isBetter: false, name: "描述相符", score: 4.64 },
            { isBetter: true, name: "价格合理", score: 4.99 },
            { isBetter: false, name: "质量满意", score: 4.88 },
          ]),
          rule: JSON.stringify([
            {
              anchor: "size-info",
              disclaimer: "以上尺寸为实物人工测量.会有1-2cm误差属于正常",
              key: "尺码说明",
              tables: [
                [
                  ["重量", "90Kg", "95Kg", "100Kg", "115Kg"],
                  ["长度", "61.5", "63", "64.5", "66"],
                  ["宽度", "98", "104", "110", "116"],
                  ["颜色", "粉色", "天蓝色", "米白色", "薰衣草紫"],
                ],
              ],
              info: {
                key: "产品参数",
                set: [
                  { key: "图案", value: "可爱如我" },
                  { key: "厂名", value: "Matsuzaka" },
                  { key: "可爱程度", value: "超级可爱" },
                ],
              },
              rate: {
                list: [
                  {
                    canExplain: false,
                    userName: "松坂砂糖",
                    content:
                      "刚好合适,物美价廉,衣服面料很好,穿着很舒服,版型也好看,非常棒.",
                    cerated: 1535694719,
                    images: [
                      "https://img1.baidu.com/it/u=2868523735,2242315863&fm=253&fmt=auto&app=120&f=JPEG?w=400&h=400",
                    ],
                    isAnonymous: 1,
                    style: "颜色:上衣+裤子  尺码:M",
                  },
                ],
              },
            },
          ]),
        },
      });
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>