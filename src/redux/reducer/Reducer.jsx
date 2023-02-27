import { ActionTypes } from "../action-type/ActionType";

const initialState = {
  productData: [],
  loading: true,
};
const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, productData: payload, loading: false };
    // case ActionTypes.SELECTED_PRODUCT:
    //   return {
    //     ...state,
    //     productData: payload,
    //   };
    default:
      return state;
  }
};

export default productReducer;
