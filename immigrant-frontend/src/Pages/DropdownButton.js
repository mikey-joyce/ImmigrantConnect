import React, { Component } from "react";

import {Redirect} from 'react-router-dom';

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
    })

  }

  render() {

    if (this.state.redirect) {
      return (
        <Redirect to = "/communities"></Redirect>
      )
    }

    return (
      <div>
        <form className="dropdown">
          <label>
            Choose Language:
            <select value={this.state.langValue}>
              <option value="english">English</option>
              <option value="spanish">Español</option>
              <option value="bosnian">Bosanski</option>
            </select>
          </label>
        </form>
        <form className="dropdown">
          <label>
            Choose Location:
            <select value={this.state.locValue}>
              <option value="St. Louis"> St.Louis</option>
            </select>
          </label>
        </form>
        <button
          type="submit"
          value="Submit"
          onClick = {this.submit}
          className="btn btn-primary">Submit</button>
      </div>
    );
  }
}

export default DropdownButton;
