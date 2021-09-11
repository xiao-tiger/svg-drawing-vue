import Vue from "vue";
import Vuex from "vuex";
import { Element } from "./options";
import { createRandomCode } from "@/util";

Vue.use(Vuex);

interface State {
  allElement: Element[];
}

export default new Vuex.Store<State>({
  state: {
    allElement: [],
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
