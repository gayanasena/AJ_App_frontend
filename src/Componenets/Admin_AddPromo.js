import React from 'react'

function Admin_AddPromo() {
    return (
        <div>
          <div className="admin_addProduct_form">
            <h2>Add Promotions</h2>
            <form method="POST" action="/addPromo">
              <table className="admin_addProduct_Table">
                <tbody>
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
                      <label>Image URL (Poster)</label>
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

export default Admin_AddPromo
