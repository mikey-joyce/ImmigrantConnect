import React, { Component } from "react";

class CreateEvent extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className = "container-fluid">
        <form>
          <div className = "form-group">
            <label for = "event-title">
              Event Name:
            </label>

            <input
              type="text"
              placeholder="Add Event Name"
              id = "event-title"
              name="event-title"
              className="form-control"
            />

          </div>

          <div className = "form-group">
            <label>
              Event Location:

            </label>
            <input
              type="text"
              placeholder="Add Event Location"
              name="event-location"
              className="form-control"
            />
          </div>

          <div className = "form-group">
            <label>
              Event Date:

            </label>

            <input
              type="date"
              name="event-date"
              min="2018-10-14"
              className="form-control"
            />


          </div>
          <button type="submit" value="Submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateEvent;
