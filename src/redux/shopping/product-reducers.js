import * as actionTypes from "./product-types";

export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_REQ:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCT_FAIL:
      return {
        loading: false,
        products:  action.payload,
      };
    default:
        return state;
    
  }
};

export const getProductDetails = (state = { products: [] }, action) => {
    switch (action.type) {
      case actionTypes.GET_PRODUCT_DETAILS_REQ:
        return {
          loading: true,
        };
      case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
        return {
          loading: false,
          products: action.payload,
        };
      case actionTypes.GET_PRODUCT_DETAILS_FAIL:
        return {
          loading: false,
          products:  action.payload,
        };
      case actionTypes.GET_PRODUCT_DETAILS_RESET:
        return {
          products: [],
        };
      default:
          return state; 
        
    }
  };
