import React, { Component } from 'react';
import CommunityPage from './CommunityPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CommunityCard extends Component {

  state = {
    communityId: 1
  }

  render() {
    return (
      <Router>
      <div class="card">
  <img className="card-img-top"></img>
  <div className="card-body">
    <h5 className="card-title">Community Title</h5>
    <p className="card-text">Community Description</p>
    <button className="btn btn-light"><Link to="/CommunityPage">Go to community</Link></button>
  </div>
  <Route path="/CommunityPage" component={CommunityPage} />
  </div>
  </Router>

 );
  }

}

export default CommunityCard;
