<template>
  <div class="top-bar">
    <div class="left"></div>
    <div class="center">
      <div class="undo-box" @click="undo">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          style="pointer-events: none"
        >
          <g>
            <path
              d="M14.1,8H7.83l2.59-2.59L9,4L4,9l5,5l1.41-1.41L7.83,10h6.27c2.15,0,3.9,1.57,3.9,3.5S16.25,17,14.1,17H7v2h7.1c3.25,0,5.9-2.47,5.9-5.5S17.35,8,14.1,8z"
              :fill="canUndo ? '#5f6368' : '#c0c1c3'"
            ></path>
          </g>
        </svg>
      </div>
      <div class="rodo-box" @click="redo">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          style="pointer-events: none"
        >
          <g>
            <path
              d="M6,13.5C6,11.57,7.75,10,9.9,10h6.27l-2.59,2.59L15,14l5-5l-5-5l-1.41,1.41L16.17,8H9.9C6.65,8,4,10.47,4,13.5S6.65,19,9.9,19H17v-2H9.9C7.75,17,6,15.43,6,13.5z"
              :fill="canRedo ? '#5f6368' : '#c0c1c3'"
            ></path>
          </g>
        </svg>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopBar extends Vue {
  get canUndo(): boolean {
    return this.$store.getters.canUndo;
  }

  get canRedo(): boolean {
    return this.$store.getters.canRedo;
  }

  undo(): void {
    this.canUndo && this.$store.commit("undo");
  }

  redo(): void {
    this.canRedo && this.$store.commit("redo");
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .center {
    display: flex;
    .undo-box,
    .rodo-box {
      width: 48px;
      height: 48px;
      text-align: center;
      line-height: 48px;
      cursor: pointer;
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
}
</style>
