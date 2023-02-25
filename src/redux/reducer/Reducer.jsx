import { ActionTypes } from "../action-type/ActionType";

const initialState = {
  productData: [],
  loading: true,
  // cartItems: [],
};
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, productData: payload, loading: false };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        productData: state.productData.filter((item) => item.id !== payload),
      };
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};

export default productReducer;
