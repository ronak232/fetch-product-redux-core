import { combineReducers } from "redux";
import productReducer from "../reducer/Reducer";

const rootReducer = combineReducers({ allproduct: productReducer,
});

export default rootReducer;
