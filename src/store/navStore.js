import create from "zustand";

const navStore = create((set) => ({
  current: "Pedidos",
  changeCurrent: (target) => {
    set((state) => ({ current: target }));
  },
}));
export default navStore;

