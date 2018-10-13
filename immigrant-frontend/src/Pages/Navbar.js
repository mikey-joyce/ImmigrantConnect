import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <div className = "Navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3>Immigrant Connect</h3>

            <button className="btn btn-dark btn pull-right buttonRight">
              <Link to="/sign-in">Sign In</Link>
            </button>
            
            <button className="btn btn-dark btn pull-right buttonRight">
              <Link to="/communities">Communities</Link>
            </button>
          </nav>
        </div>
    );
  }
}

export default Navbar;
