import { Component, Vue } from "vue-property-decorator";
import CreatePath from "../create-path/index.vue";
import EraserPath from "../eraser-path/index.vue";
import { SVGElement, Style } from "@/store/options";
import { getEditorName } from "@/util"

@Component({
  components: {
    CreatePath,
    EraserPath
  },
})
export default class CanvasWrap extends Vue {
  // 正在绘画，一个标识，用于你是否走 mousemove 事件
  drawing = false;

  element: SVGElement = {
    id: "",
    type: "",
    path: "",
    fill: "transparent",
    stroke: "pink",
    strokeWidth: 2,
  };

  get currentStyle(): Style {
    return this.$store.state.currentStyle;
  }

  get currentPen() {
    return this.$store.state.currentPen
  }

  get allElement(): SVGElement[] {
    return this.$store.state.allElement;
  }

  handleMousedown(e: MouseEvent): void {
    // 只有鼠标左键可以画画
    if (e.buttons !== 1) return;
    this.element.type = this.currentPen;
    this.element.path = `M${e.clientX} ${e.clientY} `;
    // TODO: 目前橡皮擦的做法是让path的描边为画布的背景色，这就达到隐藏效果了😄
    if (this.currentPen !== 'eraser') {
      this.element.stroke = this.currentStyle.stroke;
    } else {
      this.element.stroke = "#fafafa";
    }
    this.element.strokeWidth = this.currentStyle.strokeWidth;
    this.drawing = true;
  }

  handleMousemove(e: MouseEvent): void {
    if (!this.drawing) return;

    this.element.path += `L${e.clientX} ${e.clientY} `;
  }

  handleMouseup(): void {
    this.drawing = false;

    this.$store.commit("addElement", this.element);
    // 增加快照 方便 undo
    this.$store.commit("recordSnapshot", this.element);
  }

  render(h: Vue.CreateElement) {
    return (
      <svg
        id="svg"
        width="100%"
        height="100%"
        onMousedown={this.handleMousedown}
        onMousemove={this.handleMousemove}
        onMouseup={this.handleMouseup}
        onContextmenu={() => {
          return false;
        }}
      >
        {/* 展示所有已经绘制完成的形状 */}
        {this.allElement.map((item: SVGElement) => {
          return <create-path element={item} key={item.id} />;
        })}

        {/* 画笔 */}
        {
          this.drawing && <create-path element={this.element} />
            // h(getEditorName(this.currentPen), {
            //   props: {
            //     element: this.element
            //   }
            // })
        }
      </svg>
    );
  }
}
