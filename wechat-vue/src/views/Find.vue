<template>
  <div class="chat" id="chat">
    <!-- 头部 -->
    <Top :msg="msg3" :left="left" :right="right"></Top>
    <!-- 中间 -->
    <div class="content">
      <div class="kongbai"></div>
      <Find :list="list"></Find>
      <div class="kongbai"></div>
    </div>
    <!-- 底部  -->
    <div>
      <Footer :r="r" :f="f" :s="s" :t="t" :l="l" :msg="msg" :msg2="msg2" :msg3="msg3" :msg4="msg4"></Footer>
    </div>
  </div>
</template>


<script>
import Top from "@/components/Top.vue";
import Find from "@/components/Find.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Find,
    Top,
    Footer
  },
  data() {
    return {
      msg: ["微信", "通讯录", "发现", "我"][0],
      msg2: ["微信", "通讯录", "发现", "我"][1],
      msg3: ["微信", "通讯录", "发现", "我"][2],
      msg4: ["微信", "通讯录", "发现", "我"][3],
      left: "&#xe63d;",
      right: "&#xe655;",
      f: "&#xe65d;",
      s: "&#xe656;",
      t: "&#xe609;",
      l: "&#xe613;",
      r:'3',
      list: [
        { name: "朋友圈", logo: "&#xe621;", arrow: "&#xe61f;" },
        { name: "扫一扫", logo: "&#xe661;", arrow: "&#xe61f;" },
        { name: "摇一摇", logo: "&#xe6aa;", arrow: "&#xe61f;" },
        { name: "看一看", logo: "&#xe69a;", arrow: "&#xe61f;" },
        { name: "搜一搜", logo: "&#xe611;", arrow: "&#xe61f;" },
        { name: "附近的人", logo: "&#xe646;", arrow: "&#xe61f;" },
        { name: "购物", logo: "&#xe60a;", arrow: "&#xe61f;" },
        { name: "游戏", logo: "&#xe67e;", arrow: "&#xe61f;" },
        { name: "小程序", logo: "&#xe61e;", arrow: "&#xe61f;" }
      ]
    };
  }
};
</script>  

<style scoped lang="scss">
// @import "../../public/css/friend.scss";
// @import "../assets/css/find.css";
.chat {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.content {
  width: 100%;
  margin: 0 auto;
}
.chat .content .kongbai {
  height: 50px;
}
</style>