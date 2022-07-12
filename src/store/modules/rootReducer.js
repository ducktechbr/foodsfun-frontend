import { combineReducers } from "redux";

import selected from "./selectedOption/reducer";
import selectedCategory from "./selectedCategory/reducer";

export default combineReducers({
    selected, selectedCategory
})