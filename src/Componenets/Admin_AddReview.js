import React from 'react'

function Admin_AddReview() {
    return (
        <div>
          <div className="admin_addProduct_form">
            <h2>Add Reviews</h2>
            <form method="POST" action="/addReview">
              <table className="admin_addProduct_Table">
                <tbody>
                  <tr>
                    <td>
                      <label>Name*</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="title"
                        placeholder="eg - Sasindu Athukorala "
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Review*</label>
                    </td>
                    <td>
                      <textarea
                        name="desc"
                        placeholder="Write their reviews here...."
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Customer Image URL (Poster)</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="img1"
                        placeholder="https://myimageholder/kasun.jpg"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button type="submit">Add Review</button>
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

export default Admin_AddReview
