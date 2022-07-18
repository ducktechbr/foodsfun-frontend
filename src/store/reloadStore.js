import create from "zustand";

const reloadStore = create((set) => ({
  reload: false,
  setReload: (target) => {
    set((state) => ({ reload: target }));
  },
}));
export default reloadStore;

