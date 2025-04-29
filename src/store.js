import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    edblazonYear: "",
    tab: 0,
  }),
  persist: true,
});
