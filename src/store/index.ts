import Vue from "vue";
import Vuex from "vuex";
import { SVGElement, Style } from "./options";
import { createRandomCode, editorName, deepcopy } from "@/util";

Vue.use(Vuex);

interface State {
  allElement: SVGElement[];
  currentStyle: Style;
  currentPen: editorName; // "pencil" | "marker" | "inkpen" | "eraser" | "chalk";
  snapshotData: SVGElement[][]; // 快照数据
  snapshotIndex: number; // 快照索引
}

const store = new Vuex.Store<State>({
  state: {
    allElement: [],
    currentPen: "pencil",
    currentStyle: {
      fill: "transparent",
      strokeWidth: 1,
      stroke: "#000000",
    },
    snapshotData: [],
    snapshotIndex: -1,
  },
  mutations: {
    addElement(state, ele: SVGElement) {
      ele = deepcopy(ele);
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
    setAllElement(state, payload: SVGElement[]) {
      state.allElement = payload;
    },
    undo(state) {
      if (state.snapshotIndex > -1) {
        store.commit(
          "setAllElement",
          deepcopy(state.snapshotData[--state.snapshotIndex] || [])
        );
      }
    },
    redo(state) {
      if (state.snapshotIndex < state.snapshotData.length - 1) {
        store.commit(
          "setAllElement",
          deepcopy(state.snapshotData[++state.snapshotIndex])
        );
      }
    },
    recordSnapshot(state) {
      state.snapshotData[++state.snapshotIndex] = deepcopy(state.allElement);
      // 在 undo 过程中，添加新的快照时，要将它后面的快照清理掉
      if (state.snapshotIndex < state.snapshotData.length - 1) {
        state.snapshotData.slice(0, state.snapshotIndex + 1);
      }
    },
  },
  actions: {},
  getters: {
    canUndo(state) {
      return state.snapshotIndex > -1;
    },
    canRedo(state) {
      return state.snapshotIndex < state.snapshotData.length - 1;
    },
  },
});

export default store;
