import { combineReducers } from "redux";
import productReducer from "../reducer/Reducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  allproduct: productReducer,
  cartproduct: cartReducer,
});

export default rootReducer;
