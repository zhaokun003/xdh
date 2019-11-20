<template>
  <div>
    <div v-for="(user,index) in list" :key="index">
      <div class="content-box">
        <div class="content-box-left">
          <span class="iconfont" v-html="user.logo"></span>
        </div>
        <div class="content-box-right">
          <div class="content-t">
            <span>{{user.name}}</span>
            <span class="iconfont" v-html="user.arrow"></span>
          </div>
        </div>
      </div>
      <div class="num"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import "../../public/css/style.css";
// @import "../../public/font/iconfont.css";
.chat .content .content-box {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
}
.chat .content .content-box .content-box-left {
  width: 30px;
  height: 30px;
  float: left;
  margin: 10px 20px;
}
.chat .content .content-box .content-box-left .iconfont {
  font-size: 30px;
}
.chat .content .content-box .content-box-right {
  height: 50px;
  float: left;
  flex-grow: 1;
  overflow: hidden;
  /*超出部分隐藏*/
  white-space: nowrap;
}
.chat .content .content-box .content-box-right .content-t {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}
.chat .content .content-box .content-box-right .content-t .iconfont {
  float: right;
  margin-right: 10px;
}
.chat .content .sp {
  border-bottom: 1px solid #d8d9da;
}
.chat .content .num {
  width: 100%;
  height: 10px;
  background-color: #ededed;
}
</style>
