import React from "react";
import { useState, useEffect } from "react";

function Admin_Orders_Table() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/orders");
    const items = await data.json();
    setItems(items);
  };

  function deleteRec(id){
    deleteItems(id);
    fetchItems();
  }

  const deleteItems = async (id) => {
    const data = await fetch("/orderDel/"+id);
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
              <h2>Orders</h2>
              <div className="admin-data">
                <table>
                  <tr>
                    <th>Buyer Name</th>
                    <th>Shipping Address</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Order</th>
                    <th></th>
                  </tr>
                  {items?.map((item) => (
                    <tr key={item?._id}>
                      <td>{item?.buy_name}</td>
                      <td>{item?.buy_address}</td>
                      <td>{item?.buy_email}</td>
                      <td>{item?.buy_phone}</td>
                      <td>{item?.message}</td>
                      <td>{item?.order_date}</td>
                      <td>
                        <div>
                          <table>
                            <tr>
                              <th>Item Name</th>
                              <th>Price(Rs)</th>
                              <th>Qty</th>
                            </tr>
                            {item?.orderItems.map((singleItm) => (
                              <tr  key={singleItm?._id}>
                                <td>{singleItm?.title}</td>
                                <td>{singleItm?.price}</td>
                                <td>{singleItm?.qty}</td>
                              </tr>
                            ))}
                          </table>
                        </div>
                      </td>
                      <td>
                          <lable onClick={(e)=>deleteRec(item._id)}>
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

export default Admin_Orders_Table;
