import React, {Component} from 'react';
import Home from "./components/Home";
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';


function App(){

  return <HashRouter>
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/logowanie'} component={Login}/>
      <Route exact path={'/rejestracja'} component={Register}/>
    </Switch>
  </HashRouter>
}
export default App;
