import React, { Component } from "react";

class EventCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Event Title</h5>
            <p className="card-text">Event Description</p>
            <p className="card-text">Date</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventCard;
