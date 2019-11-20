<template>
  <div class="footer">
    <div class="footer-left">
      <span class="iconfont" v-html="fmsg"></span>
    </div>
    <!-- <div class="footer-mid"> -->
    <input type="text" class="footer-mid" />
    <!-- </div> -->
    <div class="footer-right">
      <span class="iconfont" v-html="fleft"></span>
    </div>
    <div class="footer-right">
      <span class="iconfont" v-html="fright"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['fmsg','fleft','fright']
};
</script>

<style scoped lang="scss">
// @import "../../public/css/style.css";
// @import "../../public/font/iconfont.css";

.chat .footer {
  width: 100%;
  height: 50px;
  background-color: #f7f7f7;
  margin: 0 auto;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  flex-direction: row;
}
.chat .footer .iconfont {
  font-size: 25px;
}
.chat .footer .footer-left {
  flex: 1;
  line-height: 50px;
  text-align: center;
  margin: 0 10px;
}
.chat .footer .footer-mid {
  width: 300px;
  height: 30px;
  border-style: none;
  outline: none;
  background-color: #fff;
  flex: 11;
  margin-right: 10px;
  margin-top: 10px;
}
.chat .footer .footer-right {
  flex: 1;
  line-height: 50px;
  text-align: center;
  margin-right: 10px;
}
</style>
