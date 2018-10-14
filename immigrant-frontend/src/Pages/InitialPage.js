/**
./Pages/InitialPage.js

Displays the Initial Page of the application

**/

//import react
import React, { Component } from "react";

//libs
import _ from "lodash";

//routing
import { Redirect } from "react-router-dom";

//styling
import "./InitialPage.css";

//language data
import lang_data from "../Data/translations.json";

class InitialPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      langValue: "EN"
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  handleChange(event) {
    this.setState({ langValue: event.target.value });
  }

  submit() {
    if (this.state.langValue !== null) {
      this.props.selectLanguage(this.state.langValue);

      this.setState({
        ...this.state,
        redirect: true
      });
    }
  }

  renderOptions() {
    let options = [];

    _.map(lang_data, function(lang_option, idx) {
      options.push(
        <option key={idx} value={lang_option.language}>
          {lang_option.choice}
        </option>
      );
    });

    return options;
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/communities" />;
    }

    return (
      <div className="container-fluid">
        <br />
        <div className="form-group">
          <label for="lang-select">Choose Language:</label>

          <select
            id="lang-select"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.langValue}
          >
            {this.renderOptions()}
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

export default InitialPage;
