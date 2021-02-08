// 创建 vdom

export function h(tag, props, children) {
  return {
    tag,
    props,
    children,
  }
}
