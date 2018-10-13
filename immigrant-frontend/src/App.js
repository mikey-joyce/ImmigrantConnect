/**
./App.js

root of React.JS application (besides index.js and index.html)

**/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Routing libs
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Routing Pages
import InitialPage from './Pages/InitialPage';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>

          <div>
            <Route path = "/" exact component = {InitialPage} ></Route>
          </div>

        </Router>
        
      </div>
    );
  }
}

export default App;
