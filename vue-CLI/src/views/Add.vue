<template>
  <div>
    <Useradd @change="changeuser" @userCreate="create"></Useradd>
  </div>
</template>

<script>
// @ is an alias to /src
import Useradd from "@/components/Useradd.vue";
import jquery from "../../public/jquery-3.4.1.min.js";

export default {
  components: {
    Useradd
  },
  data() {
    return {
      create: {
        username: "",
        sex: ""
      }
    };
  },
  methods: {
    changeuser(val) {
      // console.log(val)
      this.create.username = val[0];
      this.create.sex = val[1];
      // 表单验证
      if (this.create.username.length == 0) {
        alert("请输入用户名");
        return;
      }

      if (this.create.sex.length == 0) {
        alert("请输入性别");
        return;
      }

      $.ajax({
        method: "post",
        data: this.create,
        dataType: "json",
        url: "http://127.0.0.1:8888/mock.php/user/create",
        success: res => {
          $.ajax({
            method: "GET",
            dataType: "json",
            url: "http://127.0.0.1:8888/mock.php/user",
            success: res => {
              // console.log(res);
              //跳转
              this.$router.push({ path: "/" });

              this.msg = res;
            }
          });
        }
      });
    }
  }
};
</script>
