import React from "react";
import { useState, useEffect } from "react";

function Admin_Product_table() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/Products");
    const items = await data.json();
    setItems(items);
  };

  function deleteRec(id) {
    deleteItems(id);
    fetchItems();
  }

  const deleteItems = async (id) => {
    const data = await fetch("/productDel/" + id);
    const items = await data.json();
    setItems(items);
  };

  return (
    <div className="admin-col2">
      <section className="admin-container">
        <div className="admin-small-container">
          <div className="admin-data-section">
            <div className="admin-data-box">
              <div className="admin-title"></div>
              <h2>Products</h2>
              <div className="admin-data">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Price(Rs)</th>
                    <th>Colour</th>
                    <th>Category</th>
                    <th>Group</th>
                    <th>Qty</th>
                    <th>Actions</th>
                  </tr>
                  {items?.map((item) => (
                    <tr key={item?._id}>
                      <td>{item?.title}</td>
                      <td>{item?.price}</td>
                      <td>{item?.col}</td>
                      <td>{item?.category}</td>
                      <td>{item?.group}</td>
                      <td>{item?.StockQty}</td>
                      <td>
                        <lable onClick={(e) => deleteRec(item._id)}>
                          <i className="fas fa-trash-alt"></i>
                        </lable>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin_Product_table;
