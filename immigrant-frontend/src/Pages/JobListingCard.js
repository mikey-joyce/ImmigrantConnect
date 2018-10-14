import React, { Component } from "react";

//models
import models from "../Models";

class JobListingCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Job title</h5>
            <p className="card-text" />
            <p className="card-text">job desc</p>

            <p className="card-text">Phone</p>
            <p className="card-text">Email</p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default JobListingCard;
