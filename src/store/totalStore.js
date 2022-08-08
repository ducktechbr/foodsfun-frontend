import create from "zustand";

const totalStore = create((set) => ({
  total: null,

  changeTotal: (target) => {
    set((state) => ({ total : target }));
  },
  
}));
export default totalStore;
