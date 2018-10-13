import React, { Component } from 'react';
import AddEvent from './AddEvent';
import AddPost from './AddPost';

//routing
import {Redirect} from 'react-router-dom'

class CommunityPage extends Component {

  constructor(props) {

    super(props);

    if (this.props.community_selected === false) {
      this.state = {
        valid: false
      }
    }else if (this.props.community_selected){
      this.state = {
        valid: true
      }
    }

  }

  render() {

    if (this.state.valid === false) {
      return (
        <Redirect to = "/communities"></Redirect>
      )
    }

    return (
      <div>
        <h2 className="display-2">{this.props.selected_community.group_name}</h2>
        <div className="btn-group">
          <AddEvent />
          <AddPost />
        </div>
      </div>
    );
  }

}

export default CommunityPage;
