<template>
  <div>
    <HelloWorld :sendData="msg" @show="init" @del="del" @edit="edit"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import jquery from "../../public/jquery-3.4.1.min.js";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: { id: "1", username: "模板1", sex: "0" }
    };
  },
  methods: {
    init() {
      $.ajax({
        method: "GET",
        dataType: "json",
        url: "http://127.0.0.1:8888/mock.php/user",
        success: res => {
          // console.log(res);
          this.msg = res;
        }
      });
    },
    del(val) {
      //获取删除元素的 id
      var r = confirm("是否要删除？");
      if (r) {
        $.ajax({
          method: "GET",
          dataType: "json",
          url: "http://127.0.0.1:8888/mock.php/user/delete?id=" + val,
          success: res => {
            this.init();
          }
        });
      }
    },
    edit(i) {
      this.$router.push({ path: "/edit", query: { id: i } });
    }
  }
};
</script>
