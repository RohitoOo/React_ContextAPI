import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import {Provider} from './context'

import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
          <React.Fragment>
          <Navbar/>
          <div className="contianer">
            <Switch>
              <Route exact path='/' component={Index}></Route>

            </Switch>
          </div>
          </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
