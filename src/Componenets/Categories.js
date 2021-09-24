import React from "react";
import tablet from "../img/tablet.png";
import smart from "../img/smartCat.jpg";
import watch from "../img/smartwatches.jpg";
import acc from "../img/acces.jpg";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div id="category">
      <h2 className="title">Categories</h2>
      <div className="category-block">
        <div className="single-category">
          <img src={smart} alt="pic" />
          <div className="overlay"></div>
          <div className="category-desc">
            <Link to="/product">
              <h3>Smart Phones</h3>
              <hr />
              <p>A variety of different smartphones</p>
            </Link>
          </div>
        </div>
        <div className="single-category">
          <img src={tablet} alt="pic" />
          <div className="overlay"></div>
          <div className="category-desc">
          <Link to="/product">
            <h3>Tablets</h3>
            <hr />
            <p>A variety of different tablets</p>
            </Link>
          </div>
        </div>
        <div className="single-category">
          <img src={watch} alt="pic" />
          <div className="overlay"></div>
          <div className="category-desc">
            <Link to="/product">
              <h3>Smart Watches</h3>
              <hr />
              <p>A variety of different smart watches</p>
            </Link>
          </div>
        </div>
        <div className="single-category">
          <img src={acc} alt="pic" />
          <div className="overlay"></div>
          <div className="category-desc">
            <Link to="/product">
              <h3>Accessories</h3>
              <hr />
              <p>A variety of different mobile accessories</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
