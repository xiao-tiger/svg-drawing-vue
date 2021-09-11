import { Component, Vue } from 'vue-property-decorator';
import CreatePath from '../create-path/index.vue';
import { Element, Style } from '@/store/options'

@Component({
  components: {
    CreatePath
  }
})
export default class CanvasWrap extends Vue {


  // 正在绘画，一个标识，用于你是否走 mousemove 事件
  drawing = false

  get currentStyle(): Style {
    return this.$store.state.currentStyle
  }

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
    this.element.path = `M${e.clientX} ${e.clientY} `
    this.element.stroke = this.currentStyle.stroke
    this.element.strokeWidth = this.currentStyle.strokeWidth
    this.drawing = true
    const svgDom = document.querySelector('#svg') as HTMLElement
  }

  handleMousemove(e: MouseEvent) {
    if (!this.drawing) return

    console.log(e, 'move')

    this.element.path += `L${e.clientX} ${e.clientY} `
  }

  handleMouseup(e: MouseEvent) {

    this.drawing = false

    this.$store.commit('addElement', this.element)

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

