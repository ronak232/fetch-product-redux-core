import axios from "axios";
// import fetchProduct from "../../apis/FetchProduct";
import { ActionTypes } from "../action-type/ActionType";

// Types will return as object.
// Thunk used for the to change the synchronous action to asynchronous action
export const GetProducts = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      dispatch({ type: ActionTypes.GET_PRODUCTS, payload: response.data });
    })
    .catch((error) => {
      alert("Error 404", error);
    });
};

export const SelectedProduct = (id) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: id,
  };
};
