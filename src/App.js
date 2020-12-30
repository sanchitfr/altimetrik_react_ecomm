import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import LandingPage from './components/landing';
import CatalogShow from './components/Catalog/CatalogShow';
import Login from './components/Login';
import Register from './components/Register';

// import {Provider} from 'react-redux';
// import store from './store';

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <p>
            <Switch>
              <Route exact path='/' component={LandingPage}/>
              <Route path='/catalog' component={CatalogShow}/> 
              <Route path='/login' component={Login}/> 
              <Route path='/register' component={Register}/> 

            </Switch>
            </p>
          </header>
        </div>
        </Router>
      // </Provider>
    );
  }
}

export default App;
