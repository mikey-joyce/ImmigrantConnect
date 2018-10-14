import React, { Component } from "react";

import "./SignIn.css";

//util lib
import _ from "lodash";

import { Redirect } from "react-router-dom";

//API lib
import ApiInterface from "../Lib/ApiInterface";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    });
  }

  login() {
    const users = [
      {
        id: 2,
        username: "AhmedTheGreat",
        password: "*"
      },
      {
        id: 4,
        username: "YaoMingBasketballBaller",
        password: "YoMan"
      }
    ];
    let { username, password } = this.state;

    let valid_users = _.filter(users, function(user) {
      return (
        user.username === username &&
        (user.password === password || user.password === "*")
      );
    });

    if (valid_users.length > 0) {
      let auth_user = _.find(users, function(user) {
        return (
          user.username === username &&
          (user.password === password || user.password === "*")
        );
      });

      ApiInterface.getUser(auth_user.id)
        .then(
          function(user) {
            this.props.login(user);
          }.bind(this)
        )
        .catch(function(err) {
          console.log("err with server");
        });
    } else {
      alert("Wrong username or password");
    }
  }

  render() {
    if (this.props.user_logged_in) {
      return <Redirect to="/communities" />;
    }

    let { translations } = this.props;

    return (
      <div className="SignInPage">
        <div>
          <div className="form-group">
            <label>
              {translations.signin.username}:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter username"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              {translations.signin.password}:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter password"
              />
            </label>
          </div>
          <button
            onClick={this.login}
            type="submit"
            value="Submit"
            className="btn btn-primary"
          >
            {translations.forms.submit}
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
