<template>
  <div>
    <div v-for="(user,index) in info" :key="index" >
      <div class="content-box" @click="chatroom(x=1)">
        <div class="content-box-left">
          <div>
            <img :src="user.pic" alt />
          </div>
        </div>
        <div class="content-box-right">
          <div class="content-t">
            <ul>
              <li class="first">{{user.name}}</li>
              <li class="last">{{user.time}}</li>
            </ul>
          </div>
          <div class="content-b">
            <span>{{user.content}}</span>
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
  },
  methods: {
    chatroom(x) {
      if ((x == 1)) {
        this.$router.push({ path: "/chatroom" });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import "../../public/css/style.css";
// @import "../../public/font/iconfont.css";
.chat .content {
  width: 100%;
  margin: 0 auto;
}

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
  height: 30px;
  line-height: 30px;
}
.chat .content .content-box .content-box-right .content-t .first {
  float: left;
  color: #1d1d1d;
}
.chat .content .content-box .content-box-right .content-t .last {
  margin-right: 20px;
  font-size: 12px;
  color: #aaaaaa;
  float: right;
}
.chat .content .content-box .content-box-right .content-b {
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  color: #aaa;
  overflow: hidden;
  /*超出部分隐藏*/
  white-space: nowrap;
  /*不换行*/
  text-overflow: ellipsis;
  /*超出部分文字以...显示*/
}
</style>
