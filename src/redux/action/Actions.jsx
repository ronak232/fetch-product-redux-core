import { ActionTypes } from "../action-type/ActionType";

// Types will return as object.
export const GetProducts = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS,
    payload: products,
  };
};

export const DeleteProduct = (id) => {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: id,
  };
};

export const SelectedProduct = (id) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: id,
  };
};
