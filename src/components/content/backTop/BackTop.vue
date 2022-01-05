<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "Backtop",
};
</script>

<style>
.back-top {
  position: fixed;
  bottom: 50px;
  right: 10px;
  z-index: 10;
}
.back-top img {
  height: 43px;
  width: 43px;
}
</style>