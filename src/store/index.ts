import Vue from "vue";
import Vuex from "vuex";
import { SVGElement, Style } from "./options";
import { createRandomCode, editorName } from "@/util";

Vue.use(Vuex);

interface State {
  allElement: SVGElement[];
  currentStyle: Style;
  currentPen: editorName;
  // "pencil" | "marker" | "inkpen" | "eraser" | "chalk";
}

export default new Vuex.Store<State>({
  state: {
    allElement: [],
    currentPen: "pencil",
    currentStyle: {
      fill: "transparent",
      strokeWidth: 1,
      stroke: "#000000",
    },
  },
  mutations: {
    addElement(state, ele: SVGElement) {
      ele = JSON.parse(JSON.stringify(ele));
      ele.id = createRandomCode();
      state.allElement.push(ele);
    },
    setCurrentStyle(state, { stroke, strokeWidth }) {
      stroke && (state.currentStyle.stroke = stroke);
      strokeWidth && (state.currentStyle.strokeWidth = strokeWidth);
    },
    setCurrentPen(state, value) {
      state.currentPen = value;
    },
  },
  actions: {},
  modules: {},
});
