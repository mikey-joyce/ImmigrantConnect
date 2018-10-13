import React, { Component } from 'react';
import CommunityPage from './CommunityPage';
import { Link } from "react-router-dom";

//models
import models from '../Models';

let {Community} = models;

class CommunityCard extends Component {

  state = {
    communityId: 1
  }

  viewCommunity() {
    
  }

  render() {
    return (
        <div className="card">
          <img className="card-img-top">
          </img>
          <div className="card-body">
            <h5 className="card-title">
              {this.props.community.group_name}
            </h5>
            <p className="card-text">
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
