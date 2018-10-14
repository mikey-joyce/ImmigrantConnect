import React, { Component } from 'react';

import {Redirect} from 'react-router-dom';

class AddEvent extends Component {

  constructor(props) {

    super(props);

    this.addEvent = this.addEvent.bind(this);

    this.state = {
      addEvent: false
    }

  }

  addEvent() {
    this.setState({
      ...this.state,
      addEvent: true
    })
  }

  render() {

    if (this.state.addEvent === true) {
      return (
        <Redirect push to = "/create-event"></Redirect>
      )
    }

    return (
      <div>
        <button onClick = {this.addEvent} type="button" className="btn btn-outline-primary">
          Add Event Post
        </button>
      </div>
    );
  }

}

export default AddEvent;
