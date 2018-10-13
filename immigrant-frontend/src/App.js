/**
./App.js

root of React.JS application (besides index.js and index.html)

**/

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Routing libs
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Navbar from './Pages/Navbar';

//Routing Pages
import InitialPage from "./Pages/InitialPage";
import CommunitiesPage from "./Pages/CommunitiesPage";
import ViewCommunityPage from './Containers/ViewCommunityPageContainer';
import SignInPage from './Pages/SignIn';
import ProfilePage from './Containers/ProfilePageContainer';

//Redux
import { Provider } from "react-redux";
import { store } from "./Store";

//Redux actions
import { test, userLogin } from "./Actions";

//TESTING
import ApiInterface from './Lib/ApiInterface';

class App extends Component {
  constructor(props) {
    super(props);

    // For testing
    store.dispatch(test());

    ApiInterface.getUser(3).then (function (user) {
      store.dispatch(userLogin(user))
    })

  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              <Navbar />

              <div>
                <Route path="/" exact component={InitialPage} />
                <Route path = "/communities" component = {CommunitiesPage} />
                <Route path = "/view-community" component = {ViewCommunityPage} />
                <Route path = "/sign-in" component = {SignInPage} />
                <Route path = "/profile" component = {ProfilePage} />
              </div>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
