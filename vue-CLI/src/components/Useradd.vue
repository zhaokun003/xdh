<template>
  <div>
    <div class="xxx">新增</div>
    <div>
      <!-- {{userCreate}} -->
      username:
      <input type="text" v-model="name" />
      <br />sex:
      <input type="text" v-model="sex" />
      <br />
      <button @click="add">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      sex: ""
    };
  },
  // props: ["userCreate"],
  methods: {
    add() {
      this.$emit("change", [this.name, this.sex]);
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
.xxx{
  color:red;
  font-size:20px
}
</style>
