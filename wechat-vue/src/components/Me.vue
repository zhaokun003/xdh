<template>
  <div>
    <div class="name" v-for="(n,index) in icon" :key="index">
      <div class="content-box-left">
        <img :src="n.img" alt />
      </div>
      <div class="content-box-right">
        <div class="content-t">
          <span>{{n.name}}</span>
        </div>

        <div class="content-b">
          <span>{{n.id}}</span>
          <span class="iconfont code1" v-html="n.arrow"></span>
          <span class="iconfont code2" v-html="n.ewm"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import "../../public/css/me.css";
// @import "../../public/font/iconfont.css";
.chat .content .name {
  height: 140px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.chat .content .name .content-box-left {
  width: 80px;
  height: 80px;
  float: left;
  margin: 20px;
}
.chat .content .name .content-box-left img {
  width: 80px;
  height: 80px;
  border-radius: 5px;
}
.chat .content .name .content-box-right {
  height: 80px;
  margin: 20px 0;
  float: left;
  flex-grow: 1;
  overflow: hidden;
  /*超出部分隐藏*/
  white-space: nowrap;
}
.chat .content .name .content-box-right .content-t {
  height: 50px;
  font-size: 30px;
}
.chat .content .name .content-box-right .content-t .first {
  float: left;
  color: #1d1d1d;
  font-weight: bold;
}
.chat .content .name .content-box-right .content-t .last {
  margin-right: 20px;

  color: #aaaaaa;
  float: right;
}
.chat .content .name .content-box-right .content-b {
  height: 30px;
  font-size: 14px;
  width: 100%;
  line-height: 30px;
  color: #aaa;
  overflow: hidden;
  /*超出部分隐藏*/
  white-space: nowrap;
  /*不换行*/
  text-overflow: ellipsis;
  /*超出部分文字以...显示*/
}
.chat .content .name .content-box-right .content-b .code1 {
  float: right;
  margin-right: 10px;
}
.chat .content .name .content-box-right .content-b .code2 {
  float: right;
  margin-right: 20px;
}

</style>
