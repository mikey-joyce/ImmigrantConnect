import React, { Component } from "react";
import { Redirect } from "react-router-dom";

//models
import models from "../Models";

let { Community } = models;

class CommunityCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view_community: false
    };

    this.viewCommunity = this.viewCommunity.bind(this);
  }

  viewCommunity() {
    this.props.selectCommunity(this.props.community);

    this.setState({
      ...this.state,
      view_community: true
    });
  }

  render() {
    if (this.state.view_community) {
      return <Redirect push to="/view-community" />;
    }

    return (
      <div>
        <div className="card">
          <img className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.community.group_name}</h5>
            <p className="card-text" />
            <button onClick={this.viewCommunity} className="btn btn-light">
              Go to community
            </button>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default CommunityCard;
