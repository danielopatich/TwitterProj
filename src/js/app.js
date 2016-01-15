console.log('Welcome to the twitterz')
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import jQuery from 'jquery';
import _ from 'lodash';
import User from './Mods/users'

import Home from './components/home'
import Header from './components/header'
import TweetList from './components/tweet-list'
import Aside from './components/aside'
import Login from './components/login'
import Register from './components/register'
import Dashboard from './components/dashboard'
import WelcomeScreen from './components/welcomeScreen'

const requireAuth = (nextState, replaceState) => {
  if (!User.isLoggedIn()){
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
};

ReactDOM.render((
  <Router>
    <Route path="/dashboard" component={Home}>
      <IndexRoute component={WelcomeScreen}/>
      <Route path="/tweet-list" component={TweetList} onEnter={requireAuth}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Route>
  </Router>
), document.getElementById('app'));
