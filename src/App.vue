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
</style>
