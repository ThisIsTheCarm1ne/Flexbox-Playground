import { reactive, toRefs } from "vue";

const initialState = {
  boxAmount: 0,
  visibleSection: "choiceSection",
  flexDirectionPicked: "row",
  flexWrapPicked: "wrap",
  alignContentPicked: "normal",
  justifyContentPicked: "normal",
  alignItemsPicked: "normal",
  exportMobileOpen: false,
};

const savedState = JSON.parse(localStorage.getItem("vueStore") || "{}") || initialState;

const replacer = (_: string, value: any) => (value && value.__v_isRef ? value.value : value);

export const store = reactive(savedState);

store.setFlexDirection = (value: string) => {
  store.flexDirectionPicked = value;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.setFlexWrap = (value: string) => {
  store.flexWrapPicked = value;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.setAlignContent = (value: string) => {
  store.alignContentPicked = value;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.setJustifyContent = (value: string) => {
  store.justifyContentPicked = value;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.setAlignItems = (value: string) => {
  store.alignItemsPicked = value;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.setExportMobileOpen = (value: boolean) => {
  store.exportMobileOpen = value;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.increment = () => {
  store.boxAmount++;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.decrement = () => {
  store.boxAmount--;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.setVisibleSection = (value: string) => {
  store.visibleSection = value;
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

store.resetVisibleSection = () => {
  store.visibleSection = "choiceSection";
  localStorage.setItem("vueStore", JSON.stringify(toRefs(store), replacer));
};

export default store;
