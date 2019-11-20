<template>
  <div>
    <div class="chat" id="chat">
      <!-- 头部 -->
      <Top :msg="msg" :left="left" :right="right"></Top>
      <!-- 中间 -->
      <div class="content">
        <div class="kongbai"></div>
        <Index :info="info"></Index>
        <div class="kongbai"></div>
      </div>
      <!-- 底部  -->
      <div>
        <Footer :p="p" :f="f" :s="s" :t="t" :l="l" :msg="msg" :msg2="msg2" :msg3="msg3" :msg4="msg4"></Footer>
      </div>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Index from "@/components/Index.vue";
import Footer from "@/components/Footer.vue";



export default {
  components: {
    Index,
    Top,
    Footer,
   
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
      p:'1',
      info: [
        {
          name: "人民网",
          pic: require("../../public/img/1.gif"),
          content: '[2条] [链接] 当年"三进下党",习近平给乡亲们回信了!',
          time: "晚上 16:21"
        },
        {
          name: "当当网",
          pic: require("../../public/img/10.png"),
          content: '[2条] [链接] 当年"三进下党",习近平给乡亲们回信了!',
          time: "晚上 16:21"
        },
        {
          name: "人民网",
          pic: require("../../public/img/1.gif"),
          content: '[2条] [链接] 当年"三进下党",习近平给乡亲们回信了!',
          time: "晚上 16:21"
        },
        {
          name: "当当网",
          pic: require("../../public/img/10.png"),
          content: '[2条] [链接] 当年"三进下党",习近平给乡亲们回信了!',
          time: "晚上 16:21"
        },
        {
          name: "当当网",
          pic: require("../../public/img/10.png"),
          content: '[2条] [链接] 当年"三进下党",习近平给乡亲们回信了!',
          time: "晚上 16:21"
        },
        {
          name: "当当网",
          pic: require("../../public/img/10.png"),
          content: '[2条] [链接] 当年"三进下党",习近平给乡亲们回信了!',
          time: "晚上 16:21"
        },
        {
          name: "当当网",
          pic: require("../../public/img/10.png"),
          content: '[2条] [链接] 当年"三进下党",习近平给乡亲们回信了!',
          time: "晚上 16:21"
        },
        {
          name: "当当网",
          pic: require("../../public/img/10.png"),
          content: '[2条] [链接] 当年"三进下党",习近平给乡亲们回信了!',
          time: "晚上 16:21"
        },
        {
          name: "当当网",
          pic: require("../../public/img/10.png"),
          content: '[2条] [链接] 当年"三进下党",习近平给乡亲们回信了!',
          time: "晚上 16:21"
        },
        {
          name: "人民网",
          pic: require("../../public/img/1.gif"),
          content: '[2条] [链接] 当年"三进下党",习近平给乡亲们回信了!',
          time: "晚上 16:21"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
// @import "../assets/css/style.css";

.chat {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.chat .content .kongbai {
  height: 50px;
}
</style>
