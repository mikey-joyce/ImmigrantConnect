import React, { Component } from "react";

class CreateEvent extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Event Name:
            <input
              type="text"
              placeholder="Add Event Name"
              name="event-title"
              className="form-control"
            />
          </label>
          <label>
            Event Location:
            <input
              type="text"
              placeholder="Add Event Location"
              name="event-location"
              className="form-control"
            />
          </label>
          <label>
            Event Description:
            <input
              type="text"
              placeholder="Add Event Description"
              name="event-description"
              className="form-control"
            />
          </label>
          <label>
            Event Date:
            <input
              type="date"
              name="event-date"
              min="2018-10-14"
              className="form-control"
            />
          </label>
          <button type="submit" value="Submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
