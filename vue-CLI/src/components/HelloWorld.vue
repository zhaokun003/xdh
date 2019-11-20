<template>
  <div>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>sex</th>
        <th colspan="2">操作</th>
      </tr>

      <!-- 遍历数据 -->

      <tr v-for="(user,index) in sendData" :key="index">
        <td>{{user.id}}</td>
        <td>{{user.username}}</td>
        <td>{{user.sex==0?'男':'女'}}</td>
        <td @click="update(index)">修改</td>
        <td @click="del(index)">删除</td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  props: ["sendData"],
  methods: {
    del(index) {
      // console.log(this.sendData[index].id);
      this.$emit("del", this.sendData[index].id);
    },
    update(index) {
      this.$emit("edit", this.sendData[index].id);
    }
  },
  mounted() {
    this.$emit("show", this.sendData);
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
</style>
