import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//actions
import { removeFromCart } from "../redux/shopping/cart-actions";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const getCartTotal = () => {
    return cartItems
      .reduce((price, item) => price + 250 + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <div class="small-container cart-page">
      <h2>Shopping Cart</h2>
      <br/>
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Sub Total</th>
        </tr>
        {cartItems.length === 0 ? (
          <div>
            Your Cart Is Empty <Link to="/"> Go Back </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <tbody key={item?._id}>
            <tr>
              <td>
                <div class="cart-info">
                  <img
                    src={item?.img}
                    alt="product-img"
                    width="330px"
                    height="360px"
                  />
                  <div>
                    <p>{item?.title}</p>
                    <small>Rs {item?.price}</small>
                    <br />
                    <button class="btn-remove" onClick={() =>removeFromCartHandler(item?._id)}>Remove</button>
                  </div>
                </div>
              </td>
              <td>
                <label>{item?.qty}</label>
              </td>
              <td>Rs {item?.price * item?.qty}</td>
            </tr>
            </tbody>
          ))
        )}
      </table>
      <div class="total-price">
        <table>
          <tr>
            <td>Sub Total</td>
            <td>Rs {getCartSubTotal()}</td>
          </tr>
          <tr>
            <td>Shipping fees</td>
            <td>Rs 250</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>Rs {getCartTotal()}</td>
          </tr>
        </table>
      </div>
      <div class="btn-pay-box">
        <Link to="/bill" class="btn">
          Submit Order
        </Link>
      </div>
    </div>
  );
}

export default Cart;
