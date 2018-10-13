import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <h2 className="display-2">My Profile</h2>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>
                <input type="text" name="edit-name" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">Nationality</th>
              <td>
                <input
                  type="text"
                  name="edit-nationality"
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Tenure in Country</th>
              <td>
                <input type="number" name="edit-time" className="form-control" />
              </td>
            </tr>
            <tr>
              <th scope="row">Bio</th>
              <td>
                <input type="text-area" name="edit-bio" className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Profile;
