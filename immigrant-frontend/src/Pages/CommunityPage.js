import React, { Component } from 'react';
import AddEvent from './AddEvent';
import AddPost from './AddPost';

class CommunityPage extends Component {

  render() {
    return (
      <div>
        <h2 className="display-2">Community Header</h2>
          <div className="btn-group p-2" role="group">
          <AddEvent />
          </div>
          <div className="btn-group p-2" role="group">
          <AddPost />
          </div>
        </div>

    );
  }

}

export default CommunityPage;
