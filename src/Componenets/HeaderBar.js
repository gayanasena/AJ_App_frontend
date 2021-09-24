import React from "react";
import logo from "../img/AJM-logo.png";
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <header>
      <div className="header">
        <section className="right-menu">
          <div className="navbar">
            <div className="logo">
              <Link to="/">
              <img src={logo} alt="logo" width="125px"></img>
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/Product">PRODUCT</Link>
                </li>
                <li>
                  <a href="#footer">ABOUT US</a>
                </li>
                <li>
                  <Link to="/feedback">CONTACT</Link>
                </li>
              </ul>
            </nav>
            <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
            </Link>
          </div>
        </section>
      </div>
    </header>
  );
}

export default HeaderBar;
