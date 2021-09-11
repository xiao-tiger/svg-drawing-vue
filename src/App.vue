<template>
  <div id="app">
    <canvas-wrap />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CanvasWrap from "./components/canvas-wrap/index.tsx";

@Component({
  components: {
    CanvasWrap,
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
