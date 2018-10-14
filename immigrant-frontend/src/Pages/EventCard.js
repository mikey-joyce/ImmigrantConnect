import React, { Component } from "react";

//libs
import moment from "moment";

//models
import models from "../Models";

let { Event } = models;

class EventCard extends Component {
  constructor(props) {
    super(props);
  }

  toLocalTime(time) {
    var date = moment(time);

    var local_string =
      date.format("MMMM Do YYYY") + " at " + date.format("h:mm A");

    return local_string;
  }

  render() {
    let { event } = this.props;
    console.log(event);

    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{event.name}</h5>
            <p className="card-text" />
            <p className="card-text">{this.toLocalTime(event.date)}</p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default EventCard;
