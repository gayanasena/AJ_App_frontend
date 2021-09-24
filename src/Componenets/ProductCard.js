import React from "react";
import { useEffect, useState  } from "react";
import smImg from "../img/smartPhn.png";
import tabImg from "../img/tabletIco.png";
import watchImg from "../img/Watch.png";
import accImg from "../img/acc.png";
import icImg from "../img/ic.png";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getProducts as listProducts } from "../redux/shopping/product-actions";

function ProductCard() {
  
  var [categoryType, setCategory ] = useState("mobile");
  
  console.log(categoryType);

  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <h2 className="nav-topic">Products</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search items in category....."
          value={keyword}
          className="search"
          onChange={(e) => setKeyword(e.target.value)}
          
        />
      </div>
      <div className="prod-page-row">
        <div className="prod-menu-col">
          <h3 class="title-cat">Categories</h3>
          <div class="side-navbar">
            <lable class="options" onClick={()=> setCategory(categoryType = "mobile")}>
              <img src={smImg} alt="icon" />
              Smart Phones
            </lable>
            <lable class="options"  onClick={()=> setCategory(categoryType = "tab")}>
              <img src={tabImg} alt="icon" />
              Tablets
            </lable>
            <lable class="options" onClick={()=> setCategory(categoryType = "watch")}>
              <img src={watchImg} alt="icon" />
              Smart Watches
            </lable>
            <lable class="options" onClick={()=> setCategory(categoryType = "accessory")}>
              <img src={accImg} alt="icon" />
              Accessories
            </lable>
            <lable class="options" onClick={()=> setCategory(categoryType = "parts")}>
              <img src={icImg} alt="icon" />
              Spare Accessories
            </lable>
          </div>
        </div>
        <div className="prod-item-col">
          <div class="small-container">
            <div class="row">
              {loading ? (
                <h2>Loading .... </h2>
              ) : error ? (
                <h2>{error}</h2>
              ) : (
                products?.filter(item =>item.title.toLowerCase().trim().includes(keyword.toLowerCase()) && item.category.includes(categoryType)).map((product) => (
                  <div class="col-4" key={product?._id}>
                    <Link to={"/productView/" + product?._id}>
                      <img
                        src={product?.img}
                        width="330px"
                        height="auto"
                        alt="product-pic"
                      />
                      <h4>{product?.title}</h4>
                      <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                      </div>
                      <p>Rs {product?.price}</p>
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
