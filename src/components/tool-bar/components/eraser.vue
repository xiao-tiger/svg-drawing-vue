<template>
  <!-- 橡皮擦 -->
  <div class="eraser pen">
    <svg
      id="eraser-svg"
      class="tool-button"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          class="eraser-tip eraser-shadow"
          d="M91.256 19.824h-15.39A158.925 158.925 0 0 1 75.5 27.5h16.593c2.394 0 4.407-5.58 4.407-12.463 0-1.603-.077-3.13-.211-4.537-.703 5.36-3.075 9.324-5.033 9.324"
          fill="#f9d2d0"
        ></path>
        <path
          class="eraser-tip"
          d="M91.175 21.5c2.07 0 4.582-4.136 5.325-9.73-.47-4.838-1.906-8.27-4.44-8.27H74.5c.284 3.811.448 8.256.448 13.005 0 1.71-.021 3.38-.061 4.995h16.288z"
          fill="var(--red-50)"
        ></path>
        <path
          class="eraser-handle"
          d="M3.5 3.5v24h76v-24z"
          fill="#997643"
        ></path>
        <path
          class="eraser-shadow"
          d="M52 27.5H3.5v-6h76v6H52z"
          fill="#523e19"
        ></path>
        <path
          class="eraser-ferrule"
          d="M71.3 27.5s.497-3.903.497-12-.497-12-.497-12M67.7 27.5s.497-3.903.497-12-.497-12-.497-12M64.003 27.5s.497-3.903.497-12-.497-12-.497-12M60.003 27.5s.497-3.903.497-12-.497-12-.497-12"
          stroke-width=".817"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="#d0c295"
        ></path>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Eraser extends Vue {}
</script>
