import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Admin_Product_table from "./Admin_Product_table";
import Admin_Orders_Table from "./Admin_Orders_Table";
import Admin_Message_Table from "./Admin_Message_Table";
import Admin_Reviews_Table from "./Admin_Reviews_Table";
import Admin_Promo_Table from "./Admin_Promo_Table";
import Admin_AddProduct from "./Admin_AddProduct";
import Admin_AddPromo from "./Admin_AddPromo";
import Admin_AddReview from "./Admin_AddReview";

function Admin_Table() {
  const params = useParams();

  var [table, setTable] = useState("/messages");

  if (params?.stat === "stat_true") {
    if (table === "/messages") {
      return (
        <div className="admin-row">
          <div className="admin-col1">
            <div className="admin-sidebar">
              <h3>Admin Panel</h3>
              <ul class="nav-links">
                <li>
                  <a onClick={() => setTable("/messages")}>
                    <i className="fas fa-comment-alt"></i>
                    <span className="links_name">Messages</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/orders")}>
                    <i className="fas fa-clipboard"></i>
                    <span className="links_name">Orders</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/Products")}>
                    <i className="fas fa-box-open"></i>
                    <span className="links_name">Products</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/promo")}>
                    <i className="fas fa-tags"></i>
                    <span className="links_name">Promos</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/reviews")}>
                    <i className="fas fa-star"></i>
                    <span className="links_name">Reviews</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addProduct")}>
                  <i class="far fa-plus-square"></i>
                    <span className="links_name">Add Product</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addReview")}>
                  <i class="fas fa-user-edit"></i>
                    <span className="links_name">Add Review</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addPromo")}>
                  <i class="fab fa-adversal"></i>
                    <span className="links_name">Add Promotion</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="admin-col2">
            <Admin_Message_Table />
          </div>
        </div>
      );
    } else if (table === "/orders") {
      return (
        <div className="admin-row">
          <div className="admin-col1">
            <div className="admin-sidebar">
              <h3>Admin Panel</h3>
              <ul class="nav-links">
                <li>
                  <a onClick={() => setTable("/messages")}>
                    <i className="fas fa-comment-alt"></i>
                    <span className="links_name">Messages</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/orders")}>
                    <i className="fas fa-clipboard"></i>
                    <span className="links_name">Orders</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/Products")}>
                    <i className="fas fa-box-open"></i>
                    <span className="links_name">Products</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/promo")}>
                    <i className="fas fa-tags"></i>
                    <span className="links_name">Promos</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/reviews")}>
                    <i className="fas fa-star"></i>
                    <span className="links_name">Reviews</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addProduct")}>
                  <i class="far fa-plus-square"></i>
                    <span className="links_name">Add Product</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addReview")}>
                  <i class="fas fa-user-edit"></i>
                    <span className="links_name">Add Review</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addPromo")}>
                  <i class="fab fa-adversal"></i>
                    <span className="links_name">Add Promotion</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="admin-col2">
            <Admin_Orders_Table />
          </div>
        </div>
      );
    } else if (table === "/Products") {
      return (
        <div className="admin-row">
          <div className="admin-col1">
            <div className="admin-sidebar">
              <h3>Admin Panel</h3>
              <ul class="nav-links">
                <li>
                  <a onClick={() => setTable("/messages")}>
                    <i className="fas fa-comment-alt"></i>
                    <span className="links_name">Messages</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/orders")}>
                    <i className="fas fa-clipboard"></i>
                    <span className="links_name">Orders</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/Products")}>
                    <i className="fas fa-box-open"></i>
                    <span className="links_name">Products</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/promo")}>
                    <i className="fas fa-tags"></i>
                    <span className="links_name">Promos</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/reviews")}>
                    <i className="fas fa-star"></i>
                    <span className="links_name">Reviews</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addProduct")}>
                  <i class="far fa-plus-square"></i>
                    <span className="links_name">Add Product</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addReview")}>
                  <i class="fas fa-user-edit"></i>
                    <span className="links_name">Add Review</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addPromo")}>
                  <i class="fab fa-adversal"></i>
                    <span className="links_name">Add Promotion</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="admin-col2">
            <Admin_Product_table />
          </div>
        </div>
      );
    } else if (table === "/reviews") {
      return (
        <div className="admin-row">
          <div className="admin-col1">
            <div className="admin-sidebar">
              <h3>Admin Panel</h3>
              <ul class="nav-links">
                <li>
                  <a onClick={() => setTable("/messages")}>
                    <i className="fas fa-comment-alt"></i>
                    <span className="links_name">Messages</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/orders")}>
                    <i className="fas fa-clipboard"></i>
                    <span className="links_name">Orders</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/Products")}>
                    <i className="fas fa-box-open"></i>
                    <span className="links_name">Products</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/promo")}>
                    <i className="fas fa-tags"></i>
                    <span className="links_name">Promos</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/reviews")}>
                    <i className="fas fa-star"></i>
                    <span className="links_name">Reviews</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addProduct")}>
                  <i class="far fa-plus-square"></i>
                    <span className="links_name">Add Product</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addReview")}>
                  <i class="fas fa-user-edit"></i>
                    <span className="links_name">Add Review</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addPromo")}>
                  <i class="fab fa-adversal"></i>
                    <span className="links_name">Add Promotion</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="admin-col2">
            <Admin_Reviews_Table />
          </div>
        </div>
      );
    } else if (table === "/promo") {
      return (
        <div className="admin-row">
          <div className="admin-col1">
            <div className="admin-sidebar">
              <h3>Admin Panel</h3>
              <ul class="nav-links">
                <li>
                  <a onClick={() => setTable("/messages")}>
                    <i className="fas fa-comment-alt"></i>
                    <span className="links_name">Messages</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/orders")}>
                    <i className="fas fa-clipboard"></i>
                    <span className="links_name">Orders</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/Products")}>
                    <i className="fas fa-box-open"></i>
                    <span className="links_name">Products</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/promo")}>
                    <i className="fas fa-tags"></i>
                    <span className="links_name">Promos</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/reviews")}>
                    <i className="fas fa-star"></i>
                    <span className="links_name">Reviews</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addProduct")}>
                  <i class="far fa-plus-square"></i>
                    <span className="links_name">Add Product</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addReview")}>
                  <i class="fas fa-user-edit"></i>
                    <span className="links_name">Add Review</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addPromo")}>
                  <i class="fab fa-adversal"></i>
                    <span className="links_name">Add Promotion</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="admin-col2">
            <Admin_Promo_Table/>
          </div>
        </div>
      )
    }else if (table === "/addProduct") {
      return (
        <div className="admin-row">
          <div className="admin-col1">
            <div className="admin-sidebar">
              <h3>Admin Panel</h3>
              <ul class="nav-links">
                <li>
                  <a onClick={() => setTable("/messages")}>
                    <i className="fas fa-comment-alt"></i>
                    <span className="links_name">Messages</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/orders")}>
                    <i className="fas fa-clipboard"></i>
                    <span className="links_name">Orders</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/Products")}>
                    <i className="fas fa-box-open"></i>
                    <span className="links_name">Products</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/promo")}>
                    <i className="fas fa-tags"></i>
                    <span className="links_name">Promos</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/reviews")}>
                    <i className="fas fa-star"></i>
                    <span className="links_name">Reviews</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addProduct")}>
                  <i class="far fa-plus-square"></i>
                    <span className="links_name">Add Product</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addReview")}>
                  <i class="fas fa-user-edit"></i>
                    <span className="links_name">Add Review</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addPromo")}>
                  <i class="fab fa-adversal"></i>
                    <span className="links_name">Add Promotion</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="admin-col2">
            <Admin_AddProduct/>
          </div>
        </div>
      );
    } else if (table === "/addReview") {
      return (
        <div className="admin-row">
          <div className="admin-col1">
            <div className="admin-sidebar">
              <h3>Admin Panel</h3>
              <ul class="nav-links">
                <li>
                  <a onClick={() => setTable("/messages")}>
                    <i className="fas fa-comment-alt"></i>
                    <span className="links_name">Messages</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/orders")}>
                    <i className="fas fa-clipboard"></i>
                    <span className="links_name">Orders</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/Products")}>
                    <i className="fas fa-box-open"></i>
                    <span className="links_name">Products</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/promo")}>
                    <i className="fas fa-tags"></i>
                    <span className="links_name">Promos</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/reviews")}>
                    <i className="fas fa-star"></i>
                    <span className="links_name">Reviews</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addProduct")}>
                  <i class="far fa-plus-square"></i>
                    <span className="links_name">Add Product</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addReview")}>
                  <i class="fas fa-user-edit"></i>
                    <span className="links_name">Add Review</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addPromo")}>
                  <i class="fab fa-adversal"></i>
                    <span className="links_name">Add Promotion</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="admin-col2">
            <Admin_AddReview/>
          </div>
        </div>
      );
    } else if (table === "/addPromo") {
      return (
        <div className="admin-row">
          <div className="admin-col1">
            <div className="admin-sidebar">
              <h3>Admin Panel</h3>
              <ul class="nav-links">
                <li>
                  <a onClick={() => setTable("/messages")}>
                    <i className="fas fa-comment-alt"></i>
                    <span className="links_name">Messages</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/orders")}>
                    <i className="fas fa-clipboard"></i>
                    <span className="links_name">Orders</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/Products")}>
                    <i className="fas fa-box-open"></i>
                    <span className="links_name">Products</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/promo")}>
                    <i className="fas fa-tags"></i>
                    <span className="links_name">Promos</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/reviews")}>
                    <i className="fas fa-star"></i>
                    <span className="links_name">Reviews</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addProduct")}>
                  <i class="far fa-plus-square"></i>
                    <span className="links_name">Add Product</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addReview")}>
                  <i class="fas fa-user-edit"></i>
                    <span className="links_name">Add Review</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setTable("/addPromo")}>
                  <i class="fab fa-adversal"></i>
                    <span className="links_name">Add Promotion</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="admin-col2">
            <Admin_AddPromo/>
          </div>
        </div>
      );
    } 
  } else {
    return (
      <div style={{ margin: "10%" }}>
        <h2>Prohibited action, Page not found 404 !</h2>
      </div>
    );
  }
}

export default Admin_Table;
