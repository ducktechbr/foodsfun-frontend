export default function selectedCategory(state = { category: "" }, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      state.category = action.current;
      return state;
    default:
      return state;
  }
}
