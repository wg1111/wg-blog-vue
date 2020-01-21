<template>
  <div id="app">
    <!--<img src="./assets/icon.jpg">-->
    <router-view/>  <!--显示组件的地方，由routes里的path和component来找到对应的组件-->
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
