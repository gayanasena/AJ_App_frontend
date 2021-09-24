import * as actionTypes from './product-types';
import axios from 'axios';

export const getProducts = () => async(dispatch)=>{
    try{
        dispatch({type: actionTypes.GET_PRODUCT_REQ});

        const{data} = await axios.get('/products');

        dispatch({
            type:actionTypes.GET_PRODUCT_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type:actionTypes.GET_PRODUCT_FAIL,
            payload:error.respone && error.respone.data.message
            ? error.respone.data.message
            : error.message,
        });
    }
};

export const getProductsDetails = (id) => async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQ});

        const{data} = await axios.get(`/productView/${id}`);

        dispatch({
            type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type:actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload:error.respone && error.respone.data.message
            ? error.respone.data.message
            : error.message,
        });
    }
};

export const removeProductDetails = () =>(dispatch) =>{
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET,
    });
};