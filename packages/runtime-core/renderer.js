export function createRenderer() {

  function mountElement(vnode, container) {
    const el = document.createElement(vnode.type)

    if ( typeof vnode.children === 'string') {
      el.textContent = `${el.textContent }${vnode.children}`
    } else if (Array.isArray(vnode.children)) {
      vnode.children.forEach(child => {
        if (typeof child === 'string') {
          el.textContent = `${el.textContent }${child}`
        } else {
          patch(null, child, el)
        }
      });
    }
    
    if (vnode.props) {
      for (const key of Object.keys(vnode.props) ) {
        el.setAttribute(key, vnode.props[key])
      }
    }
    
    container.appendChild(el)
  }

  function patch(n1 = undefined, n2, container) {
    if (n1) {
      container.innerHTML = ''
    }
    mountElement(n2, container) 
  }

  function render(vnode, container) {
    patch(container._vnode, vnode, container) 
    container._vnode = vnode
  }

  return {
    render
  }
}