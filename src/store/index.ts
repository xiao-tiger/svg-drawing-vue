import Vue from "vue";
import Vuex from "vuex";
import { SVGElement, Style } from "./options";
import { createRandomCode } from "@/util";

Vue.use(Vuex);

interface State {
  allElement: SVGElement[];
  currentStyle: Style;
}

export default new Vuex.Store<State>({
  state: {
    allElement: [],
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
    setCurrentStyle(state, { stroke }) {
      state.currentStyle.stroke = stroke;
    },
  },
  actions: {},
  modules: {},
});
