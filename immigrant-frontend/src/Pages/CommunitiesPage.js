import React, { Component } from 'react';
import CommunityCard from './CommunityCard';

class CommunitiesPage extends Component {

  render() {
    return (
      <div>
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
        <CommunityCard />
      </div>
    );
  }

}

export default CommunitiesPage;
