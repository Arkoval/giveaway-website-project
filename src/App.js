import React from 'react';
import Home from "./components/Home";
import {HashRouter, Route,Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Logout from  './components/Logout'
import Navigation from "./components/Navigation";
import HomeGive from './components/HomeGive'


function App(){

  return <HashRouter>
    <Navigation/>
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route path='/user/:userId' component={Home} />
      <Route path={'/oddaj-rzeczy'} component={HomeGive}/>
      <Route exact path={'/logowanie'} component={Login}/>
      <Route exact path={'/rejestracja'} component={Register}/>
      <Route exact path={'/wylogowano'} component={Logout}/>
    </Switch>
  </HashRouter>
}
export default App