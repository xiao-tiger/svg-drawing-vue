<template>
  <div class="color-picker">
    <!-- 弹框 -->
    <div class="color-wrap-dialog"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ColorPicker extends Vue {}
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
</style>
