import  * as actionTypes from './cart-types';
import axios from 'axios';

export const addToCart = (id,qty)=>async(dispatch,getState)=>{
    const{ data } = await axios.get(`/productView/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            
            _id:data[0]?._id,
            title:data[0]?.title,
            img:data[0]?.img,
            price:data[0]?.price,
            qty:qty,
        },
    });
    localStorage.setItem("cart",JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch,getState) =>{
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload:id,
    });
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const resetCart = () => (dispatch,getState) =>{
    dispatch({
        type:actionTypes.CART_RESET,
    });
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};