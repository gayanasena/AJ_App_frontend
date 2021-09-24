import React from 'react';
import { Link }from 'react-router-dom'
import { useDispatch } from "react-redux";


//actions
import { resetCart } from "../redux/shopping/cart-actions";


function OrderSuccess() {

    const dispatch = useDispatch();

    const resetCartHandler = () => {
        dispatch(resetCart());
      }

    resetCartHandler();
      
    return (
        <div className="order-success">
            <h3>Order successfully placed ... wait untill we call you... Thank You for ordering from AJ Mobile ... </h3>
            <Link to = "/" className="btn-order">Go Back</Link>
        </div>
    )
}

export default OrderSuccess
