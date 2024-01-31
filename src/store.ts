import { reactive } from "vue";

export const store = reactive({
  boxAmount: 0,
  increment() {
    this.boxAmount++
  },
  decrement() {
    this.boxAmount--
  },
  visibleSection: "choiceSection",
  setVisibleSection(changedVisibleSection: string) {
    this.visibleSection = changedVisibleSection
  },
  resetVisibleSection() {
    this.visibleSection = "choiceSection"
  },
  flexDirectionPicked: "row",
  setFlexDirection(option: string) {
    this.flexDirectionPicked = option
  },
  flexWrapPicked: "wrap",
  setFlexWrap(option: string) {
    this.flexWrapPicked = option
  },
  alignContentPicked: "normal",
  setAlignContent(option: string) {
    this.alignContentPicked = option
  },
  justifyContentPicked: "normal",
  setJustifyContent(option: string) {
    this.justifyContentPicked = option
  },
  alignItemsPicked: "normal",
  setAlignItems(option: string) {
    this.alignItemsPicked = option
  },
  exportMobileOpen: false,
  setExportMobileOpen(option: boolean) {
    this.exportMobileOpen = option
  }
})
