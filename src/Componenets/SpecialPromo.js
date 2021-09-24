import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SpecialPromo() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/promo");
    const items = await data.json();
    setItems(items);
  };
  return (
    <div className="special">
      <div className="small-container">
        {items?.map((item) => (
          <div className="row" key={item?._id}>
            <div className="col-2">
              <img
                src={item?.img}
                className="special-img"
                width="360px"
                height="450px"
                alt="offer-product"
              />
            </div>
            <div className="col-2">
              <p>Special products</p>
              <h1>{item?.title}</h1>
              <small>{item?.disc}</small>
              <div>
                <Link to="/product" className="btn-special">
                  Buy Now &#8594;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialPromo;
