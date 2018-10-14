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
            <h5 className="card-title">{this.props.jobPost.employer}</h5>
            <p className="card-text" />
            <p className="card-text" />

            <p className="card-text">
              {this.props.jobPost.description}
              <br />
              <br />
              Phone: {this.props.jobPost.phone}
              <br />
              Email: {this.props.jobPost.email}
            </p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default JobListingCard;
