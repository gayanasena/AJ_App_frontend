import * as actionTypes from "./cart-types";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducers = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.products === existItem._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== action.payload),
      };
      
    case actionTypes.CART_RESET:
        state = CART_INITIAL_STATE;
        return {
          ...state, //set previos state
          cartItems: [], //set cart empty
        };

    default:
      return state;
  }
};
