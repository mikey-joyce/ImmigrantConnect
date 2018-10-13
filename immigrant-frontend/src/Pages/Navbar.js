import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from './SignIn';
import InitialPage from './InitialPage';

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h3>Immigrant Connect</h3>
          <button className="btn btn-dark btn pull-right buttonRight">
            <Link to="/InitialPage">Initial Page</Link>
          </button>
            <button className="btn btn-dark btn pull-right buttonRight">
              <Link to="/SignIn">Sign In</Link>
            </button>
          </nav>
          <Route path="/InitialPage" component={InitialPage}/>
          <Route path="/SignIn" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default Navbar;
