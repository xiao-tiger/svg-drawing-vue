import Vue from "vue";
import Vuex from "vuex";
import { Element, Style } from "./options";
import { createRandomCode } from "@/util";

Vue.use(Vuex);

interface State {
  allElement: Element[];
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
    addElement(state, ele: Element) {
      ele = JSON.parse(JSON.stringify(ele));
      ele.id = createRandomCode();
      state.allElement.push(ele);
    },
  },
  actions: {},
  modules: {},
});
