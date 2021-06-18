/* 
    2021.6.18 --wly
*/
import Icon from './Icon.vue';
import '../common/icon/iconfont.js'
Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;
