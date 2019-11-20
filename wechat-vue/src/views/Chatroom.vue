<template>
  <div>
    <div class="chat" id="chat">
      <!-- 头部 -->
      <Ctop :msg="msg" :left="left" :right="right"></Ctop>
      <!-- 中间 -->
      <div class="content">
        <div class="kongbai"></div>
        <Chat :info="info" :rinfo="rinfo"></Chat>
        <div class="kongbai"></div>
      </div>

      <!-- 底部  -->
      <div>
        <Cfooter :fmsg="fmsg" :fleft="fleft" :fright="fright"></Cfooter>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Ctop from "@/components/Ctop.vue";
import Chat from "@/components/Chat.vue";
import Cfooter from "@/components/Cfooter.vue";

export default {
  components: {
    Chat,
    Ctop,
    Cfooter
  },
  data() {
    return {
      msg: ["兄弟会三组（7）"][0],
      left: "&#xe623;",
      right: "&#xe708;",

      fmsg: "&#xe628;",
      fleft: "&#xe610;",
      fright: "&#xe655;",
      info: [
        { icon: require("../assets/img/13.png"), msg: "我来了，你在哪？" },
        { icon: require("../assets/img/10.png"), msg: "在电影院门口" },
        { icon: require("../assets/img/10.png"), msg: "hhhhhhha" },
        { icon: require("../assets/img/10.png"), msg: "OK" },
        { icon: require("../assets/img/10.png"), msg: "知道！！！！" }
      ],
      rinfo: [
        {
          icon: require("../assets/img/11.png"),
          msg: `鹦鹉来过吴江水，江上洲传鹦鹉名。
              鹦鹉西飞陇山去，芳洲之树何青青。
              烟开兰叶香风暖，岸夹桃花锦浪生。
              迁客此时徒极目，长洲孤月向谁明。`
        },
        {
          icon: require("../assets/img/11.png"),
          msg: "嗯，马上到"
        },
        {
          icon: require("../assets/img/11.png"),
          msg: "测试123123 "
        },
        {
          icon: require("../assets/img/11.png"),
          msg: "测试sdkfjalksdjfasdf lkasdf asd asdf "
        },
        {
          icon: require("../assets/img/11.png"),
          msg: "测试 "
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
// @import "../assets/css/style.css";
* {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

body {
  width: 100%;
}

.chat {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.chat .content {
  width: 100%;

  margin: 0 auto;
  background-color: #d7d6d6;
}

.chat .content .kongbai {
  height: 50px;
}
</style>
