import React, { Component } from "react";

class DropdownButton extends Component {
  state = {
    langValue: "english",
    locValue: "St. Louis"
  };

  handleChange(event) {
    this.setState({ langValue: event.target.value });
  }

  render() {
    return (
      <div>
        <form className="dropdown">
          <label>
            Choose Language:
            <select value={this.state.langValue}>
              <option value="english">English</option>
              <option value="spanish">Español</option>
              <option value="bosnian">Bokanski</option>
            </select>
          </label>
        </form>
        <form className="dropdown">
          <label>
            Choose Location:
            <select value={this.state.langValue}>
              <option value="St. Louis"> St.Louis</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default DropdownButton;
