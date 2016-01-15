import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import jQuery from 'jquery';
import _ from 'lodash';
import User from '../Mods/users'

import Header from './header'
import TweetList from './tweet-list'
import Aside from './aside'
import Login from './login'
import Register from './register'
import Dashboard from './dashboard'
import WelcomeScreen from './welcomeScreen'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Loaded: false,
      users: []
    }
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    this.interval = setInterval( () =>
    jQuery.ajax('https://twitterapii.herokuapp.com/users.json')
      .then(response => {
        this.setState({
          users: response.data
        })
      }) , 3000);
  }


  render () {
    return(
        <div>
        <Header className="head"/>
          <div className="pageWrap">
            <Aside className="aside" users={this.state.users}/>
            <main>
              {this.props.children}
            </main>
          </div>
        </div>
      )
    }
  }

export default Home;
