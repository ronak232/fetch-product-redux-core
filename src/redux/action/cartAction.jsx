import { ActionTypes } from "../action-type/ActionType";

export const AddProduct = (item) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: item,
  };
};

// export const DeleteProduct = (product) => (dispatch) => {
//   dispatch({
//     type: ActionTypes.DELETE_PRODUCT,
//     product,
//   });
// };
