<template>
  <button
    @click="handleClick"
    :class="['wly-button',`wly-button--${type}`,(plain ? `wly-button--${plain}` : ''),(size ?`${size}` :``),{shadow},{thick},]"
  >
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'wlyButton',
    props: {
      type: {
        type: String,
        default: 'default'  //primary,error,warning
      },
      size: {
        type: String,  //large,mini
      },
      icon: {
        type: String,
        default: '' //还没写
      },
      thick: Boolean,
      shadow: Boolean,  //显示阴影
      plain: {
        type: String, //dotted dashed double
      },
    },
    data () {
      return {
        msg: 'button'
      }
    },
    methods: {
      handleClick: function(e){
        this.$emit('click',e);
      }
    },
  }
</script>

<style lang="scss">
    @import './Button.scss';
    @import '../common/font/font.css';
</style>