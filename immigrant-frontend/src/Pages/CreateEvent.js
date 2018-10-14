import React, { Component } from "react";

//api
import ApiInterface from '../Lib/ApiInterface'

//models
import models from '../Models';

//libs
import moment from 'moment';

//routing
import {Redirect} from 'react-router-dom'

//shorthand
let {Event} = models;

class CreateEvent extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.eventSubmit = this.eventSubmit.bind(this);

    if (this.props.community_selected && this.props.user_logged_in) {

      this.state = {
        valid: true,
        new_event: new Event(
          0,
          this.props.logged_in_user.id,
          this.props.selected_community.id,
          "",
          moment().format(moment.HTML5_FMT.DATETIME_LOCAL)
        )
      }

      console.log(this.state.new_event);

    }else {

      this.state = {
        valid: false
      }

    }

  }

  handleChange(e) {

    let {name, value} = e.target;

    let {new_event} = this.state;

    new_event[name] = value;


    this.setState({
      ...this.state,
      new_event
    })

  }

  eventSubmit() {

    let {new_event} = this.state;

    ApiInterface.createEvent(new_event).then (function (event) {
      this.setState({
        ...this.state,
        submitted: true
      })
    }.bind(this))

  }

  render() {

    if (this.state.valid === false) {
      return (
        <Redirect to = "/communities"></Redirect>
      )
    }

    if (this.state.submitted == true) {
      return (
        <Redirect to = "/view-community"></Redirect>
      )
    }

    if (this.state.valid) {

      return (
        <div className = "container-fluid">
          <div>
            <div className = "form-group">
              <label for = "event-title">
                Event Name:
              </label>

              <input
                type="text"
                placeholder="Add Event Name"
                id = "event-title"
                onChange = {this.handleChange}
                value = {this.state.new_event.name}
                name="name"
                className="form-control"
              />

            </div>


            <div className = "form-group">
              <label>
                Event Date:

              </label>

              <input
                type="datetime-local"
                name="date"
                onChange = {this.handleChange}
                value = {this.state.new_event.date}
                className="form-control"
              />

            </div>
            <button onClick = {this.eventSubmit} type="submit" value="Submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      );
    }

  }
}

export default CreateEvent;
