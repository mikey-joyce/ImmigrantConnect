//import react
import React, { Component } from "react";

import JobListingCard from "./JobListingCard";

class JobListingsPage extends Component {
  constructor(props) {
    super(props);
  }

  renderListings() {}

  render() {
    return (
      <div className="JobListingsPage Page container-fluid">
        <h2 className="display-3">Jobs</h2>

        <div className="listings">
          <JobListingCard />
          <JobListingCard />
          <JobListingCard />
        </div>
      </div>
    );
  }
}

export default JobListingsPage;
