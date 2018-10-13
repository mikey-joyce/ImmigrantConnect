/**
./Pages/InitialPage.js

Displays the Initial Page of the application

**/

//import react
import React, { Component } from "react";
import DropdownButton from "./DropdownButton";

//styling
import "./InitialPage.css";

class InitialPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DropdownButton />
      </div>
    );
  }
}

export default InitialPage;
