import create from "zustand";

const navStore = create((set) => ({
  current: "Pedidos",
  changeCurrent: (target) => {
    set((state) => ({ current: target }));
  },
}));
export default navStore;

// state = [
//     { name: "Produtos", href: "#", current: true },
//     { name: "Pedidos", href: "#", current: false },
//     { name: "Mesas", href: "#", current: false },
//     { name: "Configurações", href: "#", current: false },
