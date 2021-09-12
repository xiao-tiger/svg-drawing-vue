<template>
  <!-- 铅笔 -->
  <div class="pencil pen active" data-type="pencil">
    <svg
      id="pencil-svg"
      class="tool-button"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          class="pencil-tip"
          d="M95.37 16.765A.777.777 0 0 0 96 16a.777.777 0 0 0-.63-.765L89.418 13a10.989 10.989 0 0 0 0 6l5.953-2.235z"
          fill="#000000"
        ></path>
        <path
          class="pencil-collar"
          d="M67.133 5l1.5 2.422c.212.378.102.792-.156 1.098 0 0-1.435 1.76-2.18 2.389a.77.77 0 0 0-.213.961l2.15 3.43a1.544 1.544 0 0 1 .002 1.4l-2.152 3.43a.77.77 0 0 0 .217.962c.754.62 2.176 2.388 2.176 2.388.258.307.368.72.156 1.098L67.133 27l15.038-5.486 5.882-2.13.947-.343a10.766 10.766 0 0 1 0-6.079l-.947-.343-5.882-2.13L67.133 5z"
          fill="#f1f3f4"
        ></path>
        <path
          class="pencil-dark-handle"
          d="M66.7 20.115l2.132-3.418h.002a1.545 1.545 0 0 0 0-1.394h-.002L66.7 11.885a.77.77 0 0 1 .133-.885H4v10h62.833a.77.77 0 0 1-.133-.885"
          fill="#000000"
        ></path>
        <path
          class="pencil-light-handle"
          d="M66.595 10.92c.764-.594 2.141-2.398 2.141-2.398.254-.306.363-.72.153-1.097L67.41 5.006 4.021 5 4 11h62.509a.786.786 0 0 1 .086-.08M66.596 21.095c.742.622 2.14 2.383 2.14 2.383.254.306.363.72.153 1.097l-1.48 2.419L4.022 27 4 21h62.5c.027.028.064.068.096.095"
          fill="#1e1e1e"
        ></path>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Pencil extends Vue {}
</script>

<style lang="scss" scoped>
.chalk-dark-accent {
  fill: var(--tool-color);
}
</style>
