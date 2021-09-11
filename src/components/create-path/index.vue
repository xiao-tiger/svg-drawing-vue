<template>
  <path
    :d="element.path"
    :fill="element.fill"
    :stroke="element.stroke"
    :stroke-width="element.strokeWidth"
  ></path>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

// interface Position {
//   x: number;
//   y: number;
// }

interface Element {
  path: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
}

@Component({})
export default class CreatePath extends Vue {
  @Prop()
  element!: Element;
}
</script>
