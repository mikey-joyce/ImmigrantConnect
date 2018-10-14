//import react
import React, { Component } from "react";

import JobListingCard from "./JobListingCard";

//util lib
import _ from "lodash";

//api
import ApiInterface from "../Lib/ApiInterface";

//models
import models from "../Models";

let { JobPost } = models;

class JobListingsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_posts: []
    };

    this.getJobPosts = this.getJobPosts.bind(this);
    this.renderListings = this.renderListings.bind(this);

    this.getJobPosts();
  }

  getJobPosts() {
    ApiInterface.getJobs()
      .then(
        function(job_posts) {
          this.setState({
            ...this.state,
            job_posts
          });
        }.bind(this)
      )
      .catch(function(err) {
        console.log("servers prob down");
        console.log(err);
      });
  }

  renderListings() {
    let job_listings = [];

    let { job_posts } = this.state;

    _.map(job_posts, function(job_post, idx) {
      job_listings.push(<JobListingCard key={idx} jobPost={job_post} />);
    });

    return job_listings;
  }

  render() {
    return (
      <div className="JobListingsPage Page container-fluid">
        <br />
        <h2 className="display-4">Jobs</h2>
        <br />

        <div className="listings">{this.renderListings()}</div>
      </div>
    );
  }
}

export default JobListingsPage;
