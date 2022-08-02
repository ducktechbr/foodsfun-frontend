import create from "zustand";

const modalStore = create((set) => ({
  selectedCard: null,
  
  changeCard: ( target ) => {
    set((state) => ({ selectedCard: target }));
  },
}));
export default modalStore;
