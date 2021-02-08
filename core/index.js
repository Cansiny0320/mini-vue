import { effectWatch } from './reactivity/index.js'
import { mountElement } from './renderer/index.js'
export function creatApp(rootComponent) {
  return {
    mount(rootContainerSelector) {
      const context = rootComponent.setup()
      const rootContainer = document.querySelector(rootContainerSelector)
      effectWatch(() => {
        rootContainer.innerHTML = ``
        const subTree = rootComponent.render(context)
        mountElement(subTree, rootContainer)
      })
    },
  }
}
