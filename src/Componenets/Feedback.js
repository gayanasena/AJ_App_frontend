import React from "react";
import  { useEffect, useState } from "react";

function Feedback() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/reviews');
        const items = await data.json();
        setItems(items);
    };
  return (
    <div className="feedback" id="feedback">
      <div className="small-container">
        <div className="row">
        {items?.map((item) => (
          <div className="col-3" key={item?._id}>
            <i className="fa fa-quote-left"></i>
            <p>{item?.review}</p>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <img src={item?.img} alt="user-img" />
            <h3>{item?.name}</h3> 
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
