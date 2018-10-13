import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <div className = "Navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">ImmigrantConnect</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <Link to = "/communities" className="nav-link" >Communities</Link>
              </li>

            </ul>
            <ul className = "navbar-nav ml-auto">

              <li className="nav-item pull-right">
                <Link to = "/sign-in" className="nav-link" >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </nav>


        </div>
    );
  }
}

export default Navbar;
