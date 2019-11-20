<template>
  <div class="chat-top">
    <div class="chat-top-left flex-item">
      <span>{{msg}}</span>
    </div>
    <div class="chat-top-mid flex-item">
      <span class="iconfont" v-html="left"></span>
    </div>
    <div class="chat-top-right flex-item">
      <span class="iconfont" v-html="right"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg", "left", "right"]
};
</script>

<style scoped lang="scss">
// @import '../../public/css/style.css';
// @import '../../public/font/iconfont.css';
.chat-top {
  width: 100%;
  height: 50px;
  background-color: #ececec;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
}
.chat-top .chat-top-left {
  flex: 10;
}
.chat-top .chat-top-left span {
  line-height: 50px;
  font-weight: bold;
  margin-left: 20px;
}
.chat-top .chat-top-mid {
  flex: 1;
}
.chat-top .chat-top-mid span {
  display: block;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
.chat-top .chat-top-right {
  flex: 1;
}
.chat-top .chat-top-right span {
  display: block;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
</style>
