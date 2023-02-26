import fetchProduct from "../../apis/FetchProduct";
import { ActionTypes } from "../action-type/ActionType";

// Types will return as object.
// Thunk used for the to change the synchronous action to asynchronous action
export const GetProducts = () => async (dispatch) => {
  await fetchProduct
    .get("/products")
    .then((response) => {
      dispatch({ type: ActionTypes.GET_PRODUCTS, payload: response.data });
    })
    .catch(() => {
      alert("Error 404");
    });
};

export const SelectedProduct = (item) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: item,
  };
};
