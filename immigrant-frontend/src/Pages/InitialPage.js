/**
./Pages/InitialPage.js

Displays the Initial Page of the application

**/

//import react
import React, {Component} from 'react';

//styling
import './InitialPage.css'

class InitialPage extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className = "InitialPage">
        <h1>The Initial Page</h1>
      </div>
    )
  }

}

export default InitialPage
