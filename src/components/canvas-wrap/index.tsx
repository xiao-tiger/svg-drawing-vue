import { Component, Vue } from "vue-property-decorator";
import CreatePath from "../create-path/index.vue";
import { SVGElement, Style } from "@/store/options";

@Component({
  components: {
    CreatePath,
  },
})
export default class CanvasWrap extends Vue {
  // 正在绘画，一个标识，用于你是否走 mousemove 事件
  drawing = false;

  get currentStyle(): Style {
    return this.$store.state.currentStyle;
  }

  element = {
    path: "",
    fill: "transparent",
    stroke: "pink",
    strokeWidth: 2,
  };

  get allElement(): SVGElement[] {
    return this.$store.state.allElement;
  }

  handleMousedown(e: MouseEvent): void {
    // 只有鼠标左键可以画画
    if (e.buttons !== 1) return;
    this.element.path = `M${e.clientX} ${e.clientY} `;
    this.element.stroke = this.currentStyle.stroke;
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
        onContextmenu={() => {
          return false;
        }}
      >
        {this.allElement.map((item: SVGElement) => {
          return <create-path element={item} key={item.id} />;
        })}
        <create-path element={this.element} />
      </svg>
    );
  }
}
