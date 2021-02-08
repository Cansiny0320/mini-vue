import { effectWatch, reactive } from './core/reactivity/index.js'

const countDom = document.querySelector('.count')
const addBtn = document.querySelector('button')
let count = reactive({
  value: 0,
})

addBtn.addEventListener('click', () => {
  count.value++
})

effectWatch(() => {
  countDom.innerText = count.value
})
