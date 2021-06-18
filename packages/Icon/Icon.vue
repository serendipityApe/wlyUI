<template>
    <svg 
    class="wly-icon" 
    aria-hidden="true"
    :style="`color:${color}`">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
    name: 'wlyIcon',
    props:{
        icon:{  //icon名字,search
            type: String,
            required: true,
        },
        color:{
            type: String,  //颜色
            default: 'white'
        },
    },
    computed:{
        iconName(){
            return `#icon-${this.icon}`
        }
    }
}
</script>

<style>
.wly-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
/* svg path:last-of-type{
    color: red;
} */
</style>