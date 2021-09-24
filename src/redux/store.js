import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//import reducers
import { cartReducers } from "./shopping/cart-reducers";
import { getProductDetails, getProductReducer } from "./shopping/product-reducers";
import {orderCreateReducer} from './shopping/order-reducers';

const reducer = combineReducers({
  cart: cartReducers,
  getProducts:getProductReducer,
  getProductDetails:getProductDetails,
  orderCreate:orderCreateReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
