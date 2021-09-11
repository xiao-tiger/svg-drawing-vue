import { Component, Vue } from 'vue-property-decorator';
import CreatePath from '../create-path/index.vue';
import { Element } from '@/store/options'

@Component({
  components: {
    CreatePath
  }
})
export default class CanvasWrap extends Vue {

  start = { x: 0, y: 0 }

  move = { x: 0, y: 0 }

  // 正在绘画，一个标识，用于你是否走 mousemove 事件
  drawing = false

  element = {
    path: '',
    fill: 'transparent',
    stroke: 'pink',
    strokeWidth: 2
  }

  get allElement() {
    return this.$store.state.allElement
  }

  handleMousedown(e: MouseEvent) {
    this.start = {
      x: e.clientX,
      y: e.clientY
    }
    this.element.path = `M${e.clientX} ${e.clientY} `
    this.drawing = true
    const svgDom = document.querySelector('#svg') as HTMLElement
  }

  handleMousemove(e: MouseEvent) {
    if (!this.drawing) return

    console.log(e, 'move')

    this.move = { 
      x: e.clientX,
      y: e.clientY
    }
    this.element.path += `L${e.clientX} ${e.clientY} `
  }

  handleMouseup(e: MouseEvent) {

    this.drawing = false

    this.$store.commit('addElement', this.element)

    this.start = { x: 0, y: 0 }
    this.move = { x: 0, y: 0 }
  }

  render() {
    return (
      <svg 
        id="svg" 
        width="100%" 
        height="100%" 
        onMousedown={this.handleMousedown}
        onMousemove={this.handleMousemove}
        onMouseup={this.handleMouseup}
      >
        {
          this.allElement.map((item: Element) => {
            return <create-path element={item} key={item.id} />
          })
        }
        <create-path element={this.element} />
      </svg>
    )
  }
}

