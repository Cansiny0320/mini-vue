export function mountElement(vnode, container) {
  const { tag, props, children } = vnode

  const el = document.createElement(tag)

  for (const key in props) {
    const val = props[key]
    el.setAttribute(key, val)
  }

  if (typeof children === 'string') {
    const textNode = document.createTextNode(children)
    el.append(textNode)
  } else if (Array.isArray(children)) {
    children.forEach(v => {
      mountElement(v, el)
    })
  }

  container.append(el)
}
