import React from "react";

function Admin_AddProduct() {
  return (
    <div>
      <div className="admin_addProduct_form">
        <h2>Add Products</h2>
        <form method="POST" action="/addProduct">
          <table className="admin_addProduct_Table">
            <tbody>
              <tr>
                <td>
                  <label>Select record type </label>
                </td>
                <td>
                  <select name="group">
                    <option value="">General Product</option>
                    <option value="featured">Featured Product</option>
                    <option value="latest">Latest Product</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Select item category </label>
                </td>
                <td>
                  <select name="category">
                    <option value="mobile">Smart Phone</option>22222
                    <option value="tab">Tablet</option>
                    <option value="watch">Smart Watch</option>
                    <option value="accessory">Accessories</option>
                    <option value="parts">Parts</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Title*</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="title"
                    placeholder="eg - Apple IPhone XR 256GB Midnight Green "
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Price (Rs)*</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="price"
                    placeholder="eg - 105000"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Color*</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="col"
                    placeholder="eg - Midnight Green"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Description*</label>
                </td>
                <td>
                  <textarea
                    name="desc"
                    placeholder="Write item description here...."
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Quantity*</label>
                </td>
                <td>
                  <input type="number" name="StockQty" defaultValue="1" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Image URL (Main)*</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="img"
                    placeholder="https://myimageholder/123.jpg"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Image URL (Front)</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="img1"
                    placeholder="https://myimageholder/123.jpg"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Image URL (Rear)</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="img2"
                    placeholder="https://myimageholder/123.jpg"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Image URL (optional)</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="img3"
                    placeholder="https://myimageholder/123.jpg"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit">Add Item</button>
                  <button type="clear">Clear</button>
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Admin_AddProduct;
