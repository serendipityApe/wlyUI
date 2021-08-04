<template>
    <button
      @click="handleClick"
      :class="['wly-button',`wly-button--${type}`,(plain ? `wly-button--${plain}` : ''),(size ?`${size}` :``),{shadow},{thick},{disabled}]"
    >
    <wly-icon v-if="icon" :icon="icon"></wly-icon>
    <span><slot></slot></span>
  </button>
</template>
<script>
import wlyIcon from'../../Icon/Icon.vue'
  export default{
    name: 'wlyButton',
    components:{
      wlyIcon
    },
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
        default:'',
      },
      thick: Boolean,
      shadow: Boolean,  //显示阴影
      disabled:Boolean,
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
    @import '../../common/font/font.css';
</style>