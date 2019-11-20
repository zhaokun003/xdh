<template>
  <div class="footer">
    <div class="chat-footer-1 footer-box active" @click="first(x=1)" v-if="p==1">
      <span class="iconfont" v-html="f"></span>
      <br />
      <span>{{msg}}</span>
    </div>
    <div class="chat-footer-1 footer-box" @click="first" v-else>
      <span class="iconfont" v-html="f"></span>
      <br />
      <span>{{msg}}</span>
    </div>

    <div class="chat-footer-2 footer-box active" @click="second(x=2)" v-if="q==2">
      <span class="iconfont" v-html="s"></span>
      <br />
      <span>{{msg2}}</span>
    </div>
    <div class="chat-footer-2 footer-box" @click="second" v-else>
      <span class="iconfont" v-html="s"></span>
      <br />
      <span>{{msg2}}</span>
    </div>

    <div class="chat-footer-3 footer-box active" @click="third(x=3)" v-if="r==3">
      <span class="iconfont" v-html="t"></span>
      <br />
      <span>{{msg3}}</span>
    </div>
    <div class="chat-footer-3 footer-box" @click="third" v-else>
      <span class="iconfont" v-html="t"></span>
      <br />
      <span>{{msg3}}</span>
    </div>

    <div class="chat-footer-4 footer-box active" @click="four(x=4)" v-if="w==4">
      <span class="iconfont" v-html="l"></span>
      <br />
      <span>{{msg4}}</span>
    </div>
    <div class="chat-footer-4 footer-box" @click="four" v-else>
      <span class="iconfont" v-html="l"></span>
      <br />
      <span>{{msg4}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: [
    "f",
    "s",
    "t",
    "l",
    "msg",
    "msg2",
    "msg3",
    "msg4",
    "p",
    "q",
    "r",
    "w"
  ],
  methods: {
    first(x) {
      if (x != 1) {
        this.$router.push({ path: "/" });
      } else {
        return false;
      }
    },
    second(x) {
      if (x != 2) {
        this.$router.push({ path: "/friend" });
      } else {
        return false;
      }
    },
    third(x) {
      if (x != 3) {
        this.$router.push({ path: "/find" });
      } else {
        return false;
      }
    },
    four(x) {
      if (x != 4) {
        this.$router.push({ path: "/me" });
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
// @import "../../public/css/style.css";
// @import "../../public/font/iconfont.css";
.footer {
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #f7f7f7;
  margin: 0 auto;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
}
// .footer .chat-footer-1 {
//   color: green;
// }
.footer .footer-box {
  flex: 1;
  line-height: 8px;
  font-size: 14px;
}
.footer .footer-box .iconfont {
  font-size: 25px;
  line-height: 35px;
  height: 25px;
  display: block;
  text-align: center;
}

.chat-footer-4 .iconfont {
  font-size: 20px !important;
}

.footer .footer-box span {
  font-size: 12px;

  height: 25px;
  display: block;
  text-align: center;
}

.chat-footer-2 span {
  line-height: 9px;
}

.chat-footer-3 span {
  line-height: 9px;
}

.active {
  color: green;
}
</style>
