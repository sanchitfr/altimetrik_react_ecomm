import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import LandingPage from './components/Landing/landing';
import CatalogShow from './components/Catalog/CatalogShow';
import Login from './components/LoginAndRegister/Login';
import Register from './components/LoginAndRegister/Register';
import Navbar from './components/navbar/Navbar';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <div className='second'>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/catalog' component={CatalogShow}/> 
            <Route path='/login' component={Login}/> 
            <Route path='/register' component={Register}/>
            <Route path='/checkout' component={Checkout}/> 
          </Switch>
          </div>
        </header>
      </div>
      </Router>
  );
}

export default App;
