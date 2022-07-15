import create from "zustand";

const reloadStore = create((set) => ({
  reload: true,
  setReload: (target) => {
    set((state) => ({ reload: target }));
  },
}));
export default reloadStore;

