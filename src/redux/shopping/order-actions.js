import Axios from "axios";
import { CART_RESET } from "./cart-types";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "./order-types";

export const createOrder = (order,name,address,email,cno,message) => async (dispatch, getState) => {
  dispatch({ type: ORDER_CREATE_REQUEST, payload: order,name,address,email,cno,message });
  try {
    const run = await Axios.post("/createOrder",order,name,address,email,cno,message);
    dispatch({ type: ORDER_CREATE_SUCCESS });
    dispatch({ type: CART_RESET });
    localStorage.removeItem("cartItems");
    if(run.status === 201){ 
      
    }
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  
};
