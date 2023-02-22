import { ActionTypes } from "../action-type/ActionType";

const initialState = {
  productData: [],
};
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, productData: payload };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        productData: state.productData.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default productReducer;
