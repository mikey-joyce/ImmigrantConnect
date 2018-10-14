import React, { Component } from "react";

import { Route, Redirect, Link } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    console.log(props);
  }

  logout() {
    this.props.logout();

    this.props.history.push("/sign-in");
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            ImmigrantConnect
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/communities" className="nav-link">
                  Communities
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/job-listings" className="nav-link">
                  Jobs
                </Link>
              </li>

              {this.props.user_logged_in === true && (
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item pull-right">
                {this.props.user_logged_in === false && (
                  <Link to="/sign-in" className="nav-link">
                    Sign In
                  </Link>
                )}

                {this.props.user_logged_in === true && (
                  <span onClick={this.logout} className="nav-link">
                    Log out
                  </span>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
