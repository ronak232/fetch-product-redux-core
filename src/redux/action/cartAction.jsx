import { ActionTypes } from "../action-type/ActionType";

export const AddProduct = (item) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.ADD_PRODUCT,
    payload: item,
  });
  localStorage.setItem(
    "cartProduct",
    JSON.stringify(getState().cartproduct.cartItems)
  );
};

export const DeleteProduct = (id) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.DELETE_PRODUCT,
    // getState ---> to get state from other reducer...
    payload: getState().cartproduct.cartItems.filter((item) => item.id !== id),
  });
  localStorage.setItem(
    "cartProduct",
    JSON.stringify(getState().cartproduct.cartItems)
  );
};
