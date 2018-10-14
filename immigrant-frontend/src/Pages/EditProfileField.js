import React, { Component } from "react";

//routing
import { Redirect, Link } from "react-router-dom";

//API
import ApiInterface from "../Lib/ApiInterface";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.loadUserProfile = this.loadUserProfile.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitProfile = this.submitProfile.bind(this);

    if (this.props.user_logged_in === false) {
      this.state = {
        valid: false
      };
    } else {
      this.state = {
        valid: true,
        user_profile: null
      };

      this.loadUserProfile();
    }
  }

  loadUserProfile() {
    ApiInterface.getUserProfile(this.props.user.id).then(
      function(user_profile) {
        this.setState({
          ...this.state,
          user_profile
        });
      }.bind(this)
    );
  }

  submitProfile() {
    let { user_profile } = this.state;

    ApiInterface.updateUserProfile(user_profile).then(
      function(user_profile) {
        this.setState({
          ...this.state,
          profile_updated: true
        });
      }.bind(this)
    );
  }

  handleInputChange(e) {
    let { user_profile } = this.state;

    let { name, value } = e.target;

    if (name === "years_in_residence") {
      if (parseInt(value) > 0) {
        user_profile[name] = value;
      }
    } else {
      user_profile[name] = value;
    }

    this.setState({
      ...this.state,
      user_profile
    });
  }

  render() {
    if (this.state.valid === false) {
      return <Redirect to="/" />;
    }

    if (this.state.profile_updated === true) {
      return <Redirect to="/profile" />;
    }

    if (this.state.user_profile !== null) {
      return (
        <div className="EditProfilePage Page">
          <h2 className="display-2">My Profile</h2>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">First Name</th>
                <td>
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    value={this.state.user_profile.first_name}
                    name="first_name"
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Last Name</th>
                <td>
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    value={this.state.user_profile.last_name}
                    name="last_name"
                    className="form-control"
                  />
                </td>
              </tr>

              <tr>
                <th scope="row">Country of Origin</th>
                <td>
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    value={this.state.user_profile.country_of_origin}
                    name="country_of_origin"
                    className="form-control"
                  />
                </td>
              </tr>

              <tr>
                <th scope="row">Tenure in Country</th>
                <td>
                  <input
                    onChange={this.handleInputChange}
                    type="number"
                    value={this.state.user_profile.years_in_residence}
                    name="years_in_residence"
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Bio</th>
                <td>
                  <input
                    onChange={this.handleInputChange}
                    type="text-area"
                    value={this.state.user_profile.bio}
                    name="bio"
                    className="form-control"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.submitProfile} className="btn btn-success">
            Submit
          </button>
        </div>
      );
    } else {
      return <p>Loading data...</p>;
    }
  }
}

export default EditProfile;
