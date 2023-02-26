import { ActionTypes } from "../action-type/ActionType";

const initialCart = {
  cartItems:  [],
  // loading: true,
};

export const cartReducer = (state = initialCart, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    // case ActionTypes.DELETE_PRODUCT:
    //   return {
    //     ...state,
    //     cartItems: payload,
    //   };
    default:
      return state;
  }
};

export default cartReducer;
