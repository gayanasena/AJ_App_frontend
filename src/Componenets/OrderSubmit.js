import React , {useEffect , useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import {ORDER_CREATE_RESET} from '../redux/shopping/order-types';
import {useHistory} from 'react-router-dom';
//actions 
import {createOrder} from '../redux/shopping/order-actions';

function OrderSubmit(props) {

  const [name, setName] = useState("");
  const [address, setAdd] = useState("");
  const [email, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMsg] = useState("");

  let history = useHistory();

  function redirect(){
    history.push(`/orderSuccess`);
  }
  
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  
  const orderCreate = useSelector((state) => state.orderCreate);
  const { success, order } = orderCreate;

  const getCartTotal = () => {
    return cartItems
      .reduce((price, item) => price + 250 + item.price * item.qty, 0)
      .toFixed(2);

  };

  const dispatch = useDispatch();

  const placeOrderHandler = () =>{
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems,name:name,address:address,email:email,cno:phone,msg:message}))
  }

  useEffect(() => {
    if (success) {
      redirect();
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, redirect, success]);

  return (
    <div className="billing-form-container">
      <h1>Billing Form</h1>
      <h3>
        Special note - Currenty we are unavailable to proceed on-site payments,
        <br />
        Please confirm order from here and we will contact you within few
        minutes.
      </h3>
      <br />
      <p>Required fields are marked * , please add a working contact number.</p>
      <div className="billing-box">
        <div className="billing-form">
          <h3>Fill the form </h3>
            <div>
              <input
                type="text"
                className="BuyName"
                placeholder="Buyers Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="ShipAddress"
                placeholder="Shipping Address*"
                value={address}
                onChange={(e) => setAdd(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="BuyEmail"
                placeholder="Email*"
                value={email}
                onChange={(e) => setMail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="BuyContact"
                placeholder="Contact No (Mobile)*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <textarea
                name="BuyMessage"
                placeholder="Write special notes here ..."
                value={message}
                onChange={(e) => setMsg(e.target.value)}
                rows="5"
              ></textarea>
            </div>
            <div className="btn-pay-box">
              <button className="btn-order" onClick={placeOrderHandler} disabled={cartItems.length === 0  }>
                Confirm Order
              </button>
            </div>
        </div>
        
        <div className="order-info">
          <h3>Order Summary</h3>
          <table className="summary">
            {cartItems.map((item) => (
              <tbody key={item?._id}>
                <tr>
                  <td>Product Name:</td>
                  <td>{item?.title}</td>
                </tr>
                <tr>
                  <td>Quantity:</td>
                  <td>{item?.qty}</td>
                </tr>
                <tr>
                  <td>Total Price:</td>
                  <td>Rs {item?.price * item?.qty}</td>
                </tr>
                <br />
              </tbody>
            ))}
          </table>
          <label>
            <b>
              Cart Total (*Shipping cost included)
              <br /> Rs {getCartTotal()}
            </b>
          </label>
        </div>
      </div>
    </div>
  );
}

export default OrderSubmit;
