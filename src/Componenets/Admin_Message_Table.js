import React from "react";
import { useState, useEffect } from "react";

function Admin_Message_Table() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/messages");
    const items = await data.json();
    setItems(items);
  };

  function deleteRec(id) {
    deleteItems(id);
    fetchItems();
  }

  const deleteItems = async (id) => {
    const data = await fetch("/messageDel/" + id);
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
              <h2>Customer Messages</h2>
              <div className="admin-data">
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                  {items?.map((item) => (
                    <tr key={item?._id}>
                      <td>{item?.name}</td>
                      <td>{item?.phone}</td>
                      <td>{item?.message}</td>
                      <td>{item?.date}</td>
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

export default Admin_Message_Table;
