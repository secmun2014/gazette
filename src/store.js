import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    edblazonYear: "",
    edmundianYear: "",
    tab: 0,
  }),
  persist: true,
});
