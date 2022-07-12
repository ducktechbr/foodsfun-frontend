import create from "zustand";
import { api } from "../api";


const categoryStore = create((set)=> ({
  selected: "",
  changeCategory: ((target) => {
    set((state) => ({ selected: target }));
  })
}))
export default categoryStore;


// const navStore = create((set) => ({
//   current: "Produtos",
//   changeCurrent: (target) => {
//     set((state) => ({ current: target }));
//   },
// }));
