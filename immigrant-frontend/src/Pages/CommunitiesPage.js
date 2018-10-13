import React, { Component } from 'react';
import CommunityCard from '../Containers/CommunityCardContainer';

//libs
import _ from 'lodash';

//api
import ApiInterface from '../Lib/ApiInterface';

//import models
import models from '../Models/'

let {Community} = models;

class CommunitiesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      communities: []
    }

    this.load_communities = this.load_communities.bind(this);
    this.render_communities = this.render_communities.bind(this);

    this.load_communities();

  }

  load_communities() {

    ApiInterface.getCommunities().then (function (communities) {

      console.log(communities);

      this.setState({
        ...this.state,
        communities
      })

    }.bind(this)).catch (function (err) {
      console.log(err);
      console.log("server is malfunctioning... probably");
    })

  }

  render_communities() {

    let rendered_communities = [];

    _.map(this.state.communities, function (community, idx) {

      rendered_communities.push(
        <CommunityCard key = {idx} community = {community} />
      )

    })

    return rendered_communities;

  }

  render() {
    return (
      <div className = "CommunityPage">

        {this.render_communities()}

      </div>
    );
  }

}

export default CommunitiesPage;
