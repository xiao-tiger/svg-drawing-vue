<template>
  <div class="m-tool-bar">
    <color-picker />
    <div class="pen-size">
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          class="tool-option-button-light-body"
          d="M12.78,7.66,10.35,5.22,4,11.56V14H6.44Zm2.09-2.1a.42.42,0,0,0,0-.6L13,3.13a.42.42,0,0,0-.6,0L11.29,4.28l2.44,2.44Z"
        ></path>
        <polygon
          class="tool-option-button-stroke-color"
          points="17 13 17 17 3 17 17 13"
        ></polygon>
        <path
          class="tool-option-button-stroke-outline"
          d="M3,17L17,13L17,16L16,16L16,14.34L10.18,16L17,16L17,17z"
        ></path>
        <path
          class="tool-option-button-dark-body"
          d="M12.78,7.66,11.56,6.44,4,14H6.44Zm2.09-2.1a.42.42,0,0,0,0-.6L14,4,12.51,5.49l1.22,1.22Z"
        ></path>
      </svg>
    </div>
    <div class="stroke"></div>
    <form-pen />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FormPen from "./components/form-pen.vue";
import ColorPicker from "./components/color-picker.vue";

@Component({
  components: {
    FormPen,
    ColorPicker,
  },
})
export default class ToolBar extends Vue {}
</script>

<style lang="scss">
.m-tool-bar {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72px;
  height: 445px;
  padding: 14px 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border-radius: 0 8px 8px 0;
  filter: drop-shadow(0 1px 3px #3c40434d) drop-shadow(0 4px 8px #3c404326);

  .pen-size {
    width: 40px;
    height: 44px;
    margin: 10px 0;
  }
  .stroke {
    background-color: #dbdbdb;
    height: 1px;
    margin: 10px 0 14px 0;
    width: 32px;
  }
}
</style>
