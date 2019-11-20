<template>
  <div class="chat" id="chat">
    <!-- 头部 -->
    <div class="chat-top">
      <div class="chat-top-right">
        <span class="iconfont">&#xe77b;</span>
      </div>
    </div>
    <!-- 中间 -->
    <div class="content">
      <div class="kongbai"></div>
      <Me :icon="icon"></Me>
      <Find :list="list"></Find>
      <div class="kongbai"></div>
    </div>
    <!-- 底部  -->
    <div>
      <Footer :w="w" :f="f" :s="s" :t="t" :l="l" :msg="msg" :msg2="msg2" :msg3="msg3" :msg4="msg4"></Footer>
    </div>
  </div>
</template>


<script>
import Find from "@/components/Find.vue";
import Me from "@/components/Me.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Me,
    Find,
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
      w:'4',
      list: [
        { name: "朋友圈", logo: "&#xe621;", arrow: "&#xe61f;" },
        { name: "支付", logo: "&#xe60c;", arrow: "&#xe61f;" },
        { name: "收藏", logo: "&#xe627;", arrow: "&#xe61f;" },
        { name: "相册", logo: "&#xe640;", arrow: "&#xe61f;" },
        { name: "卡包", logo: "&#xe66b;", arrow: "&#xe61f;" },
        { name: "表情", logo: "&#xe62c;", arrow: "&#xe61f;" },
        { name: "设置", logo: "&#xe619;", arrow: "&#xe61f;" }
      ],
      icon: [
        {
          img: require("../assets/img/1.jpg"),
          name: "赵坤",
          id: "微信号:zhaokun",
          ewm: "&#xe653;",
          arrow: "&#xe61f;"
        }
      ]
    };
  }
};
</script>  

<style scoped lang="scss">
// @import "../../public/css/friend.scss";
// @import "../assets/css/me.css";
.chat {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.chat .chat-top {
  width: 100%;
  height: 50px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
}
.chat .chat-top .chat-top-right span {
  float: right;
  display: block;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  margin-right: 12px;
}
.chat .content {
  width: 100%;
  margin: 0 auto;
}
.chat .content .kongbai {
  height: 50px;
}
</style>
