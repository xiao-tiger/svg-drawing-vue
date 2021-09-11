<template>
  <div id="app">
    <canvas-wrap />
    <tool-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CanvasWrap from "./components/canvas-wrap/index";
import ToolBar from "./components/tool-bar/index.vue";

@Component({
  components: {
    CanvasWrap,
    ToolBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100vh;
}
html {
  --color-swatch-inner-shadow: inset 0 0 1px #00000042;
  --grey-100: #f1f3f4;
  --grey-400: #bdc1c6;
  --grey-700: #5f6368;
  --grey-900: #202124;
  --tool-color: #000000;
  --accent-color: #1e1e1e;
}
</style>
