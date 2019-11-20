<template>
  <div>
    <!-- 左边发言 -->
    <div class="content-box" v-for="(user,index) in info" :key="index">
      <div class="content-box-left">
        <img :src="user.icon" alt />
      </div>
      <div class="content-box-right">
        <div class="content-t">
          <div class="myDiv">
            <div class="innerDiv"></div>
            <span class="mP">{{user.msg}}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 右边发言 -->
    <div class="right-b" v-for="(ruser,index) in rinfo" :key="'item'+index">
      <div class="content-box-left-x">
        <img :src="ruser.icon" alt />
      </div>
      <div class="content-box-right-x">
        <div class="content-t-x">
          <div class="myDiv-x">
            <div class="innerDiv-x"></div>
            <span class="m-x">{{ruser.msg}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["info", "rinfo"]
};
</script>

<style scoped lang="scss">
// 左边发言
.chat .content .content-box {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.chat .content .content-box .content-box-left {
  width: 40px;
  height: 40px;
  float: left;
  margin: 10px 10px;
}
.chat .content .content-box .content-box-left img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.chat .content .content-box .content-box-right {
  height: 40px;
  margin: 10px 0;
  float: left;
  flex-grow: 1;
  overflow: hidden;
  /*超出部分隐藏*/
  white-space: nowrap;
}
.content-t {
  height: 40px;
}
.content-t .myDiv {
  display: inline-block;
  height: 40px;
  background-color: #fff;
  border-radius: 5px;
  margin-left: 10px;
}
.content-t .myDiv .innerDiv {
  margin-left: -7px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #fff;
  float: left;
  position: relative;
  left: 0;
  top: 10px;
}
.content-t .myDiv .mP {
  line-height: 40px;
  padding: 0 10px;
  text-align: center;
  font-size: 14px;
}

// 右边发言
.right-b {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}
.right-b .content-box-left-x {
  width: 40px;
  height: 40px;
  float: right;
  margin: 10px 10px;
}
.right-b .content-box-left-x img {
  width: 40px;
  height: 40px;
  border-radius: 5px;
}
.right-b .content-box-right-x {
  min-height: 40px;
  margin: 10px 0 10px 60px;
  float: right;
  flex-grow: 1;

  /*超出部分隐藏*/
}
.right-b .content-box-right-x .content-t-x {
  min-height: 40px;
}
.right-b .content-box-right-x .content-t-x .myDiv-x {
  display: inline-block;
  min-height: 40px;
  background-color: #fff;
  border-radius: 5px;
  margin-right: 10px;
  float: right;
}
.right-b .content-box-right-x .content-t-x .myDiv-x .innerDiv-x {
  margin-left: -7px;
  z-index: 21;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #fff;
  float: right;
  position: relative;
  right: -7px;
  top: 10px;
}
.right-b .content-box-right-x .content-t-x .myDiv-x .m-x {
  line-height: 40px;
  padding: 0 10px;
  text-align: center;
  font-size: 14px;
  word-break: break-all;
}
</style>
