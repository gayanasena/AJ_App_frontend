import React from "react";
import samLogo from "../img/samsung-logo.png";
import appleLogo from "../img/apple-logo.png";
import lgLogo from "../img/LG.png";
import huaweiLogo from "../img/huawei.png";

function Brands() {
  return (
    <div className="small-container">
      <div className="row">
        <div className="col-5">
          <img src={samLogo} alt="logo" />
        </div>
        <div className="col-5">
          <img src={appleLogo} alt="logo" />
        </div>
        <div className="col-5">
          <img src={lgLogo} alt="logo" />
        </div>
        <div className="col-5">
          <img src={huaweiLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
