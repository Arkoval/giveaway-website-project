import React, {Component} from 'react';
import Home from "./components/Home";
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Logout from  './components/Logout'
import Navigation from "./components/Navigation";


function App(){

  return <HashRouter>
    <Navigation/>
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/logowanie'} component={Login}/>
      <Route exact path={'/rejestracja'} component={Register}/>
      <Route exact path={'/wylogowano'} component={Logout}/>
    </Switch>
  </HashRouter>
}
export default App