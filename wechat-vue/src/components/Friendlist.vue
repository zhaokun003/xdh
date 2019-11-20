<template>
  <div>
    <div v-for="(n,index) in num" :key="index">
      <div class="num">
        <span>{{n.num}}</span>
      </div>
      <div class="content-box" v-for="(user,index) in list" :key="index">
        <div class="content-box-left">
          <img :src="user.pic" alt />
        </div>
        <div class="content-box-right">
          <div class="content-t">
            <span>{{user.username}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list", "num"],
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

.chat .content .num {
  height: 50px;
  background-color: #ededed;
  line-height: 50px;
}
.chat .content .num span {
  display: block;
  margin-left: 20px;
  font-size: 20px;
}
</style>
