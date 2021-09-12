<template>
  <div class="form-pen" @click="selectPen">
    <pencil />
    <inkpen />
    <marker-pen />
    <chalk />
    <eraser />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Pencil from "./pencil.vue";
import Inkpen from "./inkpen.vue";
import MarkerPen from "./marker.vue";
import Chalk from "./chalk.vue";
import Eraser from "./eraser.vue";

@Component({
  components: {
    Pencil,
    Inkpen,
    MarkerPen,
    Chalk,
    Eraser,
  },
})
export default class FormPen extends Vue {
  selectPen($event: MouseEvent): void {
    let target = $event.target as HTMLElement;
    const formDom = document.querySelector(".form-pen");
    if (target && formDom) {
      [...formDom.children].forEach((e: Element): void => {
        e.classList.remove("active");
      });
      const penDom = target.closest(".pen") as HTMLElement;
      penDom?.classList.add("active");

      const { type } = penDom?.dataset;
      if (type) {
        this.$store.commit("setCurrentPen", type);
      }
    }
  }
}
</script>

<style>
.tool-button {
  height: 32px;
  padding: 10px 0;
  transform: translateX(var(--tool-animation-offset));
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100px;
}
.active {
  --tool-animation-offset: 0;
}
</style>
