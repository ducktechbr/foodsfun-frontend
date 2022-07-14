import create from "zustand";



const categoryStore = create((set)=> ({
  selected: "",
  changeCategory: ((target) => {
    set((state) => ({ selected: target }));
  }),
}))
export default categoryStore;
