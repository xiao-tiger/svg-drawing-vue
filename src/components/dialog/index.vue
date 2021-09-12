<template>
  <transition>
    <div v-show="visible" class="m-dialog">
      <slot>dialog</slot>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Dialog extends Vue {
  @Prop({
    default: false,
  })
  visible!: boolean;
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.m-dialog {
  top: 0;
  left: 76px;
  position: absolute;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #fff;
  filter: drop-shadow(0 1px 3px #3c40434d) drop-shadow(0 4px 8px #3c404326);
}
</style>
