import React, { Component } from "react";

//routing
import { Redirect, Link } from "react-router-dom";

//API
import ApiInterface from "../Lib/ApiInterface";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.loadUserProfile = this.loadUserProfile.bind(this);
    this.editProfile = this.editProfile.bind(this);

    if (this.props.user_logged_in === false) {
      this.state = {
        valid: false
      };
    } else {
      this.state = {
        valid: true,
        user_profile: null,
        edit_profile: false
      };

      this.loadUserProfile();
    }

    console.log(props);
  }

  editProfile() {
    this.setState({
      ...this.state,
      edit_profile: true
    });
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

  render() {
    if (this.state.valid === false) {
      return <Redirect to="/" />;
    }

    if (this.state.edit_profile === true) {
      return <Redirect push to="/edit-profile" />;
    }

    let { translations } = this.props;

    if (this.state.user_profile !== null) {
      return (
        <div className="ProfilePage Page">
          <h2 className="display-2">{translations.profile.welcome}</h2>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">{translations.profile.name}</th>
                <td>
                  {this.state.user_profile.first_name}{" "}
                  {this.state.user_profile.last_name}
                </td>
              </tr>
              <tr>
                <th scope="row">{translations.profile.country_of_origin}</th>
                <td>{this.state.user_profile.country_of_origin}</td>
              </tr>
              <tr>
                <th scope="row">{translations.profile.tenure_in_country}</th>
                <td>{this.state.user_profile.years_in_residence} years</td>
              </tr>
              <tr>
                <th scope="row">{translations.profile.bio}</th>
                <td>{this.state.user_profile.bio}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.editProfile} className="btn btn-info">
            {translations.profile.edit}
          </button>
        </div>
      );
    } else {
      return <p>Loading data...</p>;
    }
  }
}

export default Profile;
