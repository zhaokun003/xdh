<template>
  <div>
    <div class="chat-top">
      <div class="chat-top-left flex-item" @click="back">
        <span class="iconfont" v-html="left"></span>
        <span>兄弟会三组(7)</span>
      </div>

      <div class="chat-top-right flex-item">
        <span class="iconfont" v-html="right"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg", "left", "right"],
  methods:{
    back(){
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped lang="scss">
.chat .chat-top {
  width: 100%;
  height: 50px;
  background-color: #ececec;
  z-index: 99;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
}
.chat .chat-top .chat-top-left {
  cursor: pointer;
  flex: 10;
}
.chat .chat-top .chat-top-left span {
  line-height: 50px;
  margin-left: 20px;
}
.chat .chat-top .chat-top-mid {
  flex: 1;
}
.chat .chat-top .chat-top-mid span {
  display: block;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
.chat .chat-top .chat-top-right {
  flex: 1;
}
.chat .chat-top .chat-top-right span {
  display: block;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}
</style>
