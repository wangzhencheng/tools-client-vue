<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {};
    },
    created() {
    },
  }
</script>

<style>
  html, body {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  body {
    position: relative;
  }


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    box-sizing: border-box;
  }

  body::-webkit-scrollbar,#app::-webkit-scrollbar {
    display: none;
  }
  .customLoadingBg{
    background-color: rgba(255,255,255,.4)
  }
  .customLoadingBg .el-loading-spinner{
    background: white;
    width: 100px;
    height: 100px;
    left: 50%;
    margin-left: -50px;
    border-radius: 10px;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .el-loading-mask.is-fullscreen .el-loading-spinner {
    margin-top: -50px;
  }
</style>
