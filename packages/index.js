import wlyButton from './button/index.js';
import wlyIcon from './Icon/Index.js'
import wlyRow from './Row/index.js';
import wlyCol from './Col/index.js';

const components = [
  wlyButton,
  wlyIcon,
  wlyRow,
  wlyCol
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  wlyButton,
  wlyIcon,
  wlyRow,
  wlyCol,
}
