import React, { Component } from 'react';
import CommunityPage from './CommunityPage';
import { Link } from "react-router-dom";

class CommunityCard extends Component {

  state = {
    communityId: 1
  }

  render() {
    return (
        <div className="card">
          <img className="card-img-top">
          </img>
          <div className="card-body">
            <h5 className="card-title">
              Community Title
            </h5>
            <p className="card-text">
              Community Description
            </p>
            <button className="btn btn-light">
              <Link to="/view-community">
                Go to community
              </Link>
            </button>
          </div>
        </div>

      );
  }

}

export default CommunityCard;
