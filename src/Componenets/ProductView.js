import React from "react";
import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'

//actions
import {getProductsDetails} from '../redux/shopping/product-actions';
import {addToCart} from '../redux/shopping/cart-actions';
function ProductView() {

  const [qty, setQty] = useState(1);
  const params = useParams();
  const dispatch = useDispatch();

    const productDetails =  useSelector((state) => state.getProductDetails);
    const {loading, products, error} = productDetails; 

    useEffect(()=>{
      if(products && params.id !==products._id){
        dispatch(getProductsDetails(params.id,""));
      }
      
    },[dispatch,params]);

    const addToCartHandler = ()=>{
      dispatch(addToCart(params.id,qty));
    }

  return (
    <div class="small-container single-product">
     { loading ? <h2>Loading .... </h2> : error? <h2>{error}</h2> :products?.map(product=>(
        <div class="row" key={product?._id}>
        <div class="col-2">
          <img
            src={product?.img}
            alt="product-img"
            width="100%"
            id="productImg"
          />
          <div class="small-img-row">
            <div class="small-img-col">
              <img
                src={product?.img1}
                alt="product-img"
                width="100%"
                class="small-img"
              />
            </div>
            <div class="small-img-col">
              <img
                src={product?.img2}
                alt="product-img"
                width="100%"
                class="small-img"
              />
            </div>
            <div class="small-img-col">
              <img
                src={product?.img3}
                alt="product-img"
                width="100%"
                class="small-img"
              />
            </div>
            <div class="small-img-col">
              <img
                src={product?.img}
                alt="product-img"
                width="100%"
                class="small-img"
              />
            </div>
          </div>
        </div>
        <div class="col-2">
          <h1>{product?.title}</h1>
          <h4>Rs {product?.price}</h4>
          <h5 className="color-picker" onChange={() => setQty(qty)}>Quantity</h5>
          <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product?.StockQty).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
          <div class="color-picker">
            <h5 className="color-picker">Pick a colour</h5>
            <td>
              <span class="color" id="color-1"></span>
            </td>
            <td>
              <span class="color" id="color-2"></span>
            </td>
            <td>
              <span class="color" id="color-3"></span>
            </td>
            <select>
              <option>Default Colour</option>
              <option >{product?.col}</option>
            </select>
          </div>
          
          &nbsp;&nbsp;
          <Link to="/cart">
          <button class="btn" onClick={addToCartHandler}>
            Add To Cart
          </button>
          </Link>
          <h3>
            Description <i class="fa fa-indent"></i>
          </h3>
          <br />
          <p>
            {product?.desc}
          </p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default ProductView;
