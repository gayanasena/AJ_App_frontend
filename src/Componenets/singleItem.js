import React from 'react'
import { Link } from "react-router-dom";

function singleItem({_id,title,price,img}) {
    return (
        <div class="col-4" key={_id}>
                  <Link to={"/productView/"+_id}>
                  <img
                    src={img}
                    width="330px"
                    height="auto"
                    alt="product-pic"
                  />
                  <h4>{title}</h4>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                  </div>
                  <p >Rs {price}</p>
                  </Link>
                </div>
    )
}

export default singleItem
