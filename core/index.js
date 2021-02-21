import { effectWatch } from './reactivity/index.js'
import { mountElement, diff } from './renderer/index.js'
export function creatApp(rootComponent) {
  return {
    mount(rootContainerSelector) {
      const context = rootComponent.setup()
      const rootContainer = document.querySelector(rootContainerSelector)
      let isMounted = false
      let preSubTree
      effectWatch(() => {
        if (!isMounted) {
          // init
          isMounted = true
          const subTree = rootComponent.render(context)
          mountElement(subTree, rootContainer)
          preSubTree = subTree
        } else {
          // update
          rootContainer.innerHTML = ``
          const subTree = rootComponent.render(context)
          diff(preSubTree, subTree)
          preSubTree = subTree
        }
      })
    },
  }
}
