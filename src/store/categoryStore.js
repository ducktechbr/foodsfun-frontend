import create from "zustand";

const categoryStore = create((set) => ({
  selectedCategory: null,
  selectedId: null,
  list: null,
  changeCategory: (target, targetId) => {
    set((state) => ({ selectedCategory: target, selectedId: targetId }));
  },
  changeList: (target) => {
    set((state) => ({ list: target }));
  },
}));
export default categoryStore;
