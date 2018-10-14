import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import "./DropdownButton.css";

class DropdownButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      langValue: "english",
      locValue: "St. Louis"
    };

    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({ langValue: event.target.value });
  }

  submit() {
    this.setState({
      ...this.state,
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/communities" />;
    }

    return (
      <div className="container-fluid">
        <div className="form-group">
          <label for="lang-select">Choose Language:</label>

          <select
            id="lang-select"
            className="form-control"
            value={this.state.langValue}
          >
            <option value="english">English</option>
            <option value="spanish">Español</option>
            <option value="bosnian">Bosanski</option>
          </select>
        </div>
        <div className="form-group">
          <label for="location-select">Choose Location:</label>

          <select
            id="location-select"
            className="form-control"
            value={this.state.locValue}
          >
            <option value="St. Louis"> St.Louis</option>
          </select>
        </div>
        <button
          type="submit"
          value="Submit"
          onClick={this.submit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default DropdownButton;
