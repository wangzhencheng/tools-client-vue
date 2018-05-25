<template>
  <div class="HelloWorld">
    helloworld
    <el-button @click="request">点击请求</el-button>
  </div>
</template>

<script>
  import * as API from 'src/tools/API';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      request() {
        console.log("this is request!")
        API.test({
          name: "wzc"
        }).then((res) => {
          if (res.data.code == 200) {
            this.$message("success");
          } else {
            this.$message(res.data.msg);
          }
          console.log(res)
        }).catch((err) => {
          console.log(err)
        });
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .HelloWorld {
    height: 100%;
  }
</style>
