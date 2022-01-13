<template>
  <div class="param-info">
    <div class="info-key">{{ JSON.parse(paramInfo.rule)[0].key }}</div>
    <table
      v-for="table in JSON.parse(paramInfo.rule)[0].tables"
      class="info-size"
      :key="table.index"
    >
      <tr v-for="tr in table" :key="tr.index">
        <td v-for="td in tr" :key="td.index">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr
        v-for="(info, index) in JSON.parse(paramInfo.rule)[0].info.set"
        :key="index"
      >
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.info-key {
  margin: 10px 0 10px 0;
  color: #333;
  font-size: 15px;
}
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}
</style>
