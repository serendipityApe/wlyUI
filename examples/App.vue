<template>
<div id="app">
  <router-view></router-view>
</div>
  
</template>

<script>
export default {
  name: 'App',
  methods: {
    test: function(e){
      console.log(e)
    }
  },
}
</script>

<style less="scss">
@import url(./assets/scss/index.css);
#app {
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
