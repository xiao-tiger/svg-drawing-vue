<template>
  <div class="color-picker" :style="{ background: value }">
    <!-- 弹框 -->
    <transition name="fade">
      <div v-show="show" class="color-wrap-dialog">
        <header class="header" @click="selectFeature">
          <p
            v-for="(item, index) of feature"
            :key="index"
            :data-index="index"
            :class="[currentFeature === index ? 'active' : '']"
          >
            {{ item }}
          </p>
          <div
            class="line"
            :style="{ transform: `translateX(${currentFeature * 100}%)` }"
          ></div>
        </header>
        <!-- 调色板 -->
        <section class="color-panel">
          <div id="color-container" @click="changeColor">
            <p
              v-for="color of colors"
              :key="color.color"
              :data-color="color.color"
              class="color-item"
            >
              <span
                :class="[value === color.color ? 'active' : '']"
                :style="{ 'background-color': color.color }"
                :title="color.title"
                :data-color="color.color"
              ></span>
            </p>
          </div>
          <!-- <section id="custom-color"></section> -->
        </section>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ColorPicker extends Vue {
  @Prop({
    default: "#000000",
  })
  value!: string;

  show = false;

  colors = Object.freeze([
    { title: "黑色", color: "#000000" },
    { title: "灰色 700", color: "#5f6368" },
    { title: "灰色 500", color: "#9aa0a6" },
    { title: "灰色 100", color: "#f1f3f4" },
    { title: "白色", color: "#ffffff" },
    { title: "红色 300", color: "#f28b82" },
    { title: "黄色 300", color: "#fdd663" },
    { title: "绿色 300", color: "#81c995" },
    { title: "青色 300", color: "#78d9ec" },
    { title: "蓝色 300", color: "#8ab4f8" },
    { title: "紫色 300", color: "#c58af9" },
    { title: "红色 500", color: "#ea4335" },
    { title: "黄色 500", color: "#fbbc04" },
    { title: "绿色 500", color: "#34a853" },
    { title: "青色 500", color: "#24c1e0" },
    { title: "蓝色 500", color: "#4285f4" },
    { title: "紫色 500", color: "#a142f4" },
    { title: "红色 700", color: "#c5221f" },
    { title: "黄色 700", color: "#f29900" },
    { title: "绿色 700", color: "#188038" },
    { title: "青色 700", color: "#12a4af" },
    { title: "蓝色 700", color: "#1967d2" },
    { title: "紫色 700", color: "#8430ce" },
  ]);

  feature = ["调色板", "自定义"];

  // 当前选中项 调色板  自定义
  currentFeature = 0;

  selectFeature(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (target) {
      const { index } = target.dataset;
      if (index !== undefined) {
        this.currentFeature = +index;
      }
    }
  }

  changeColor(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (target) {
      const { color } = target.dataset;
      if (color) {
        this.$emit("input", color);
        this.$emit("change", color);
      }
    }
  }

  handleClick(e: MouseEvent): void {
    if (this.$el.contains(e.target as HTMLElement)) {
      if (this.$el === e.target) {
        this.show = !this.show;
      } else {
        this.show = true;
      }
    } else {
      this.show = false;
    }
  }

  mounted(): void {
    document.addEventListener("click", this.handleClick, true);
  }

  beforeDestroy(): void {
    document.removeEventListener("click", this.handleClick, true);
  }
}
</script>

<style lang="scss" scoped>
.color-picker {
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: black;
  border: 1px solid #0000001e;
  cursor: pointer;
  margin: 10px 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.color-wrap-dialog {
  position: absolute;
  width: 328px;
  box-sizing: border-box;
  top: -24px;
  left: 72px;
  padding: 0 20px;
  border-radius: 8px;
  background-color: #fff;
  filter: drop-shadow(0 1px 3px #3c40434d) drop-shadow(0 4px 8px #3c404326);
  overflow: hidden;
  .header {
    position: relative;
    display: flex;
    width: 288px;
    height: 48px;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    p {
      width: 50%;
      height: 100%;
      padding: 20px 0 7px 0;
      text-align: center;
      margin-bottom: 1px;
    }
    .active {
      color: var(--blue-600);
    }
    .line {
      width: 50%;
      position: absolute;
      bottom: 0;
      height: 1px;
      background-color: var(--blue-600);
      transition: all 0.3s;
    }
  }
  .color-panel {
    display: flex;
    padding: 20px 0;
    box-sizing: border-box;
    overflow: hidden;

    &.xx {
      transform: translateX(-308px);
    }
    #color-container {
      display: grid;
      grid-auto-rows: 4;
      grid-template-columns: repeat(6, 48px);

      p {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        span {
          display: inline-block;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          transition: transform 0.1s;
          cursor: pointer;
          border: 1px solid #e8eaed;

          &.active {
            transform: scale(1.5);
          }
        }
      }
    }

    #custom-color {
      width: 288px;
      height: 232px;
      box-sizing: border-box;
    }
  }
}
</style>
