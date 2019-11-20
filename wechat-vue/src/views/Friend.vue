<template>
  <div class="chat" id="chat">
    <!-- 头部 -->
    <Top :msg="msg2" :left="left" :right="right"></Top>
    <!-- 中间 -->
    <div class="content">
      <div class="kongbai"></div>

      <Friend :info="info"></Friend>
      <Friendlist :list="list" :num="num"></Friendlist>

      <div class="content-box">
        <div class="allman">
          <span>6位联系人</span>
        </div>
      </div>
      <div class="kongbai"></div>
      <div class="find">
        <ul>
          <li class="iconfont">&#xe70a;</li>
          <li class="iconfont">&#xe639;</li>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
          <li>E</li>
          <li>F</li>
          <li>G</li>
          <li>H</li>
          <li>I</li>
          <li>J</li>
          <li>K</li>
          <li>L</li>
          <li>M</li>
          <li>N</li>
          <li>O</li>
          <li>P</li>
          <li>Q</li>
          <li>R</li>
          <li>S</li>
          <li>T</li>
          <li>U</li>
          <li>V</li>
          <li>W</li>
          <li>X</li>
          <li>Y</li>
          <li>Z</li>
          <li>#</li>
        </ul>
      </div>
    </div>
    <!-- 底部  -->
    <div>
      <Footer  :q="q" :f="f" :s="s" :t="t" :l="l" :msg="msg" :msg2="msg2" :msg3="msg3" :msg4="msg4"></Footer>
    </div>
  </div>
</template>


<script>
import Top from "@/components/Top.vue";
import Friend from "@/components/Friend.vue";
import Friendlist from "@/components/Friendlist.vue";

import Footer from "@/components/Footer.vue";

export default {
  components: {
    Friend,
    Top,
    Footer,
    Friendlist
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
      q:'2',
      info: [
        { name: "新的朋友", pic: require("../assets/img/1.gif") },
        { name: "群聊", pic: require("../assets/img/1.gif") },
        { name: "标签", pic: require("../assets/img/1.gif") },
        { name: "公众号", pic: require("../assets/img/1.gif") }
      ],
      list: [
        // {
        //   A: [
        //     { username: "America", pic: require("../assets/img/1.gif") },
        //     { username: "America", pic: require("../assets/img/1.gif") }
        //   ]
        // },
        // {
        //   B: [
        //     { username: "America", pic: require("../assets/img/1.gif") },
        //     { username: "America", pic: require("../assets/img/1.gif") }
        //   ]
        // }
        { username: "America", pic: require("../assets/img/1.gif") },
        { username: "America", pic: require("../assets/img/1.gif") }
      ],
      num: [{ num: "A" }, { num: "B" }, { num: "C" }, { num: "D" }]
    };
  }
};
</script>  

<style scoped lang="scss">
// @import "../../public/css/friend.scss";
// @import "../assets/css/friend.css";
.chat {
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.chat .content {
  width: 100%;
  margin: 0 auto;
}
.chat .content .kongbai {
  height: 50px;
}
.chat .content .find {
  width: 20px;
  position: fixed;
  top: 100px;
  right: 5px;
  font-size: 12px;
  text-align: center;
}
.chat .content .find li {
  margin: 2px 0;
}

.chat .allman {
  margin: 0 auto;
}
.chat .allman span {
  line-height: 80px;
  font-size: 20px;
  color: #7e7e7e;
}

.content-box {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
}
</style>