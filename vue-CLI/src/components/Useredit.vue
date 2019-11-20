<template>
  <div class="add">
    <div class="xxx">修改</div>
    <div>
      username:
      <input type="text" v-model="users.username" />
      <br />sex:
      <input type="text" v-model="users.sex" />
      <br />
      <button @click="commit">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["users"],
  methods: {
    commit() {
      this.$emit("commit", {
        username: this.users.username,
        sex: this.users.sex
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
}

table td,
table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
  width: 100px;
}

table thead th {
  background-color: #cce8eb;
  width: 100px;
}

.xxx {
  color: red;
  font-size: 20px;
}
</style>
