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

//Redux
import {Provider} from 'react-redux';
import {store} from './Store';

//Redux actions
import {test} from './Actions';

class App extends Component {

  constructor(props) {
    super(props);

    // For testing
    store.dispatch(test());
  }

  render() {
    return (
      <div className="App">
        <Provider store = {store}>
          <Router>

            <div>
              <Route path = "/" exact component = {InitialPage} ></Route>
            </div>

          </Router>

        </Provider>
      </div>
    );
  }
}

export default App;
