import React, { Component } from "react";

//libs
import moment from 'moment';

//models
import models from '../Models';

let {Event} = models;

class EventCard extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    let {event} = this.props;
    console.log(event);

    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{event.name}</h5>
            <p className="card-text"></p>
            <p className="card-text">{moment(event.date).format("MMMM Do YYYY")} at {moment(event.date).format("h:mm A")}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard;
