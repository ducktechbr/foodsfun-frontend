import create from "zustand";

const categoryStore = create((set) => ({
  selected: "",
  selectedId: "",
  changeCategory: (target, targetId) => {
    set((state) => ({ selected: target, selectedId: targetId }));
  },
}));
export default categoryStore;
