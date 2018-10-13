import React, { Component } from "react";

class EditProfile extends Component {

  constructor(props) {
    super(props);

    


  }

  submitProfile() {

  }

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
        <button onClick = {this.submitProfile} className = "btn btn-success">Submit</button>
      </div>
    );
  }
}

export default EditProfile;
