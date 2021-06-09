<template>
<div id="app">
  <!-- <wlyButton double plain="solid" @click="test($event)" size="large" shadow>超大按钮</wlyButton>
  <wlyButton type="primary" plain='dashed' dotted>default</wlyButton>
  <wlyButton type="success"  plain='dotted' size="mini" double>我是mini</wlyButton>
  <wlyButton plain='double' dashed>default</wlyButton>

  <wlyButton double plain="solid" thick shadow>按钮</wlyButton>
  <wlyButton type="primary" thick plain='dashed' dotted>default</wlyButton>
  <wlyButton type="success" thick  plain='dotted' double>default</wlyButton>
  <wlyButton plain='double' thick dashed>default</wlyButton>

  <wlyButton type="primary" dotted  shadow>按钮</wlyButton>
  <wlyButton type="success" >default</wlyButton>
  <wlyButton type="danger"  double>default</wlyButton>
  <wlyButton type="warning" dashed>default</wlyButton> -->
  <router-view></router-view>
</div>
  
</template>

<script>
// import wlyButton from '@/components/Button/Button'
export default {
  name: 'App',
  methods: {
    test: function(e){
      console.log(e)
    }
  },
}
</script>

<style>
#app {
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
