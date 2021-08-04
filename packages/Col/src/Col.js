import './Col.scss'
export default {
    name: 'WlyCol',
    
    props: {
      span: {
        type: Number,
        default: 24
      },
      tag: {
        type: String,
        default: 'div'
      },
      offset: Number,
      pull: Number,
      push: Number,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object],
      xl: [Number, Object]
    },
  
    computed: {
      gutter() {
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'WlyRow') {
          parent = parent.$parent;
        }
        return parent ? parent.gutter : 0;
      }
    },
    render(h) {
      let classList = [];
      let style = {};
  
      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + 'px';
        style.paddingRight = style.paddingLeft;
      }
  
      ['span', 'offset', 'pull', 'push'].forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          classList.push(
            prop !== 'span'
              ? `wly-col-${prop}-${this[prop]}`
              : `wly-col-${this[prop]}`
          );
        }
      });
  
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`wly-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          let props = this[size];
          Object.keys(props).forEach(prop => {
            classList.push(
              prop !== 'span'
                ? `wly-col-${size}-${prop}-${props[prop]}`
                : `wly-col-${size}-${props[prop]}`
            );
          });
        }
      });
  
      return h(this.tag, {
        class: ['wly-col', classList],
        style
      }, this.$slots.default);
    }
  };
  