import { reactive } from './core/reactivity/index.js'
import { h } from './core/h.js'
const App = {
  render(context) {
    // const div = document.createElement('div')
    // div.innerText = context.state.count
    // return div
    return h(
      'div',
      {
        id: 'id',
        class: 'class',
      },
      [h('div', null, '123'), h('div', null, '456'), h('div', null, '789')],
    )
  },

  setup() {
    const state = reactive({
      count: 0,
    })
    window.state = state
    return { state }
  },
}

export default App
