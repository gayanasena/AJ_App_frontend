import React from "react";
import ArtLogo from "../img/background.jpg";
import {Link} from 'react-router-dom';

function MainArticle() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-2">
          <h1>The best mobile accessory provider in Sri Lanka</h1>
          <p>
            We provide the best quality products for over customers for over 10
            years.
            <br /> Building up a good brand among the local communtiy.
          </p>
          <Link to="/product" className="btn">
            Explore Now &#8594;
          </Link>
        </div>
        <div className="col-2">
          <img src={ArtLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainArticle;
