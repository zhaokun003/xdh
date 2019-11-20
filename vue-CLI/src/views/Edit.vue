<template>
  <div>
    <Useredit :users="msg" @commit="commit"></Useredit>
  </div>
</template>

<script>
// @ is an alias to /src
import Useredit from "@/components/Useredit.vue";
import jquery from "../../public/jquery-3.4.1.min.js";

export default {
  components: {
    Useredit
  },
  data() {
    return {
      msg: { id: "", username: "", sex: "" }
    };
  },
  methods: {
    commit(val) {
      // console.log(this.msg.id)
      var i = this.msg.id;
      // 表单验证
      if (val.username.length == 0) {
        alert("请输入用户名");
        return;
      }

      if (val.sex.length == 0) {
        alert("请输入性别");
        return;
      }
      $.ajax({
        method: "post",
        data: this.msg,
        dataType: "json",
        url: "http://127.0.0.1:8888/mock.php/user/update?id=" + i,
        success: res => {
          this.$router.push({ path: "/" });
        }
      });
    }
  },
  mounted() {
    //获取当前id 数据 ,显示在页面
    var i = this.$route.query.id;
    // console.log(this.$route.query);
    if (i) {
      $.ajax({
        method: "post",
        dataType: "json",
        url: "http://127.0.0.1:8888/mock.php/user/get?id=" + i,
        success: res => {
          this.msg = res;
        }
      });
    }
  }
};
</script>
