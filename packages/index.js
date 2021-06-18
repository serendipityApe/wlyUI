import wlyButton from './button/index.js';
import wlyIcon from './Icon/Index.js'

const components = [
  wlyButton,
  wlyIcon,
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
  wlyIcon
}
