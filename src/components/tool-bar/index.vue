<template>
  <div class="m-tool-bar">
    <color-picker :value="value" @change="changeColor" />
    <div v-clickOutside class="pen-size">
      <svg viewBox="0 0 20 20" class="pen-svg">
        <path
          class="tool-option-button-light-body"
          d="M12.78,7.66,10.35,5.22,4,11.56V14H6.44Zm2.09-2.1a.42.42,0,0,0,0-.6L13,3.13a.42.42,0,0,0-.6,0L11.29,4.28l2.44,2.44Z"
        ></path>
        <polygon
          class="tool-option-button-stroke-color"
          points="17 13 17 17 3 17 17 13"
        ></polygon>
        <path
          class="tool-option-button-stroke-outline"
          d="M3,17L17,13L17,16L16,16L16,14.34L10.18,16L17,16L17,17z"
        ></path>
        <path
          class="tool-option-button-dark-body"
          d="M12.78,7.66,11.56,6.44,4,14H6.44Zm2.09-2.1a.42.42,0,0,0,0-.6L14,4,12.51,5.49l1.22,1.22Z"
        ></path>
      </svg>
      <svg-dialog :visible.sync="visible">
        <div class="content">
          <div class="column">
            <p>大小</p>
          </div>
          <div class="slider-wrapper">
            <div>
              <input
                type="range"
                min="1"
                max="10"
                :value="fontSize"
                @input="changeSize"
              />
            </div>
          </div>
        </div>
      </svg-dialog>
    </div>
    <div class="stroke"></div>
    <form-pen />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormPen from "./components/form-pen.vue";
import ColorPicker from "./components/color-picker.vue";
import Dialog from "../dialog/index.vue";

type CallbackFunction = (e: MouseEvent) => void;
type NEWHTMLElement = HTMLElement & { [propName: string]: CallbackFunction };

@Component({
  directives: {
    clickOutside: {
      bind: function (el, binding, vnode): void {
        const handler = (e: MouseEvent) => {
          if (el.contains(e.target as HTMLElement)) {
            // 点击事件在 el 里面 不做处理  在el外面，关闭弹窗
            const _target = e.target as HTMLElement;
            if (
              el.firstChild === _target.closest(".pen-svg") ||
              el === _target
            ) {
              if (vnode && vnode.context) {
                const context = vnode.context as Vue & { visible: boolean };
                context.visible = !context.visible;
              }
            } else {
              vnode &&
                vnode.context &&
                ((vnode.context as Vue & { visible: boolean }).visible = true);
            }
          } else {
            vnode &&
              vnode.context &&
              ((vnode.context as Vue & { visible: boolean }).visible = false);
          }
        };
        (el as NEWHTMLElement).handler = handler;
        document.addEventListener("mousedown", handler, true);
      },
      unbind: function (el) {
        document.removeEventListener(
          "mousedown",
          (el as NEWHTMLElement).handler,
          true
        );
      },
    },
  },
  components: {
    FormPen,
    ColorPicker,
    "svg-dialog": Dialog,
  },
})
export default class ToolBar extends Vue {
  value = "#000000";
  visible = false;

  get fontSize(): number {
    return this.$store.state.currentStyle.strokeWidth;
  }

  changeColor(value: string): void {
    this.value = value;
    this.$store.commit("setCurrentStyle", { stroke: value });
  }

  changeSize(e: InputEvent): void {
    const _target = e.target as HTMLInputElement;
    if (_target) {
      this.$store.commit("setCurrentStyle", { strokeWidth: +_target.value });
    }
  }
}
</script>

<style lang="scss">
.m-tool-bar {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72px;
  height: 445px;
  padding: 14px 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border-radius: 0 8px 8px 0;
  filter: drop-shadow(0 1px 3px #3c40434d) drop-shadow(0 4px 8px #3c404326);

  .pen-size {
    position: relative;
    width: 40px;
    height: 44px;
    margin: 10px 0;
    .content {
      display: flex;
      align-items: center;
      .column {
        width: 52px;
        font-size: 13px;
        p {
          height: 32px;
          line-height: 32px;
          color: #5f6368;
        }
      }
      .slider-wrapper {
        width: 200px;
        margin-left: 4px;
        input {
          width: 100%;
        }
      }
    }
  }
  .stroke {
    background-color: #dbdbdb;
    height: 1px;
    margin: 10px 0 14px 0;
    width: 32px;
  }
}
</style>
