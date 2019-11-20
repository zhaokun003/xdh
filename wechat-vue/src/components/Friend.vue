<template>
  <div>
    <div v-for="(user,index) in info" :key="index">
      <div class="content-box">
        <div class="content-box-left">
          <img :src="user.pic" alt />
        </div>
        <div class="content-box-right">
          <div class="content-t">
            <span>{{user.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import "../../public/css/style.css";
// @import "../../public/font/iconfont.css";
.chat .content .content-box {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
}
.chat .content .content-box .content-box-left {
  width: 60px;
  height: 60px;
  float: left;
  margin: 10px 20px;
}
.chat .content .content-box .content-box-left img {
  width: 60px;
  height: 60px;
  border-radius: 5px;
}
.chat .content .content-box .content-box-right {
  height: 70px;
  margin: 10px 0;
  float: left;
  border-bottom: 1px solid #d8d9da;

  flex-grow: 1;
  overflow: hidden;
  /*超出部分隐藏*/
  white-space: nowrap;
}
.chat .content .content-box .content-box-right .content-t {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}
</style>
