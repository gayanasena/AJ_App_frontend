import React from "react";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FeaturedProd() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [Featitems, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/featProd');
        const Featitems = await data.json();
        setItems(Featitems);
    };
  return (
    <div className="featured-products">
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
        {Featitems?.map((item) => (
          <div className="col-4" key={item?._id}>
            <Link to={"/productView/"+item?._id}>
          <img src={item?.img}width="330px" height="auto" alt="product-pic" />
          <h4>{item?.title}</h4>
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-o"></i>
          </div>
          <p>Rs {item?.price}</p>
          </Link>
        </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProd;
