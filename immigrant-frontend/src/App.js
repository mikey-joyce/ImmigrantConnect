/**
./App.js

root of React.JS application (besides index.js and index.html)

**/

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//Routing libs
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

//Components
import Navbar from "./Containers/NavbarContainer";

//Routing Pages
import LanguageSelectPage from "./Containers/LanguageSelectContainer";
import CommunitiesPage from "./Containers/CommunitiesPageContainer";
import ViewCommunityPage from "./Containers/ViewCommunityPageContainer";
import SignInPage from "./Containers/SignInContainer";
import ProfilePage from "./Containers/ProfilePageContainer";
import EditProfilePage from "./Containers/EditProfilePageContainer";
import CreatePostPage from "./Containers/CreatePostPageContainer";
import CreateEventPage from "./Containers/CreateEventPageContainer";
import JobListingsPage from "./Containers/JobsPageContainer";

//Redux
import { Provider } from "react-redux";
import { store } from "./Store";

//Redux actions
import { test, userLogin } from "./Actions";

//TESTING
import ApiInterface from "./Lib/ApiInterface";

let NavbarWithRouter = withRouter(Navbar);

class App extends Component {
  constructor(props) {
    super(props);

    // For testing
    store.dispatch(test());
  }

  login() {}

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              <NavbarWithRouter />

              <div>
                <Route path="/" exact component={LanguageSelectPage} />
                <Route path="/communities" component={CommunitiesPage} />
                <Route path="/view-community" component={ViewCommunityPage} />
                <Route path="/create-event" component={CreateEventPage} />
                <Route path="/create-post" component={CreatePostPage} />
                <Route path="/sign-in" component={SignInPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/edit-profile" component={EditProfilePage} />
                <Route path="/job-listings" component={JobListingsPage} />
              </div>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
