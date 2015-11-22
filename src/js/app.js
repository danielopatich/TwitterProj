console.log('Welcome to the twitterz')

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import jQuery from 'jquery';
import _ from 'lodash';

import TweetList from './tweet-list';
import Aside from './aside';
import Header from './header'
import TweetInput from './tweet-input'
import Login from './login'
import Register from './register';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Loaded: false,
      tweets:[],
      users: []
    }
  }

  componentDidMount() {
    this.getUsers();
    this.getTweets();
  }

  getUsers() {
    jQuery.ajax('https://twitterapii.herokuapp.com/users.json')
      .then(response => {
        this.setState({
          users: response.data
        })
      });
  }

  getTweets() {
    jQuery.ajax('https://twitterapii.herokuapp.com/tweets.json')
      .then(response => {
        this.setState({
          Loaded: true,
          tweets: response.data
        })
      });
  }

  render () {
    return  (
      <div className="body">
        <Header className="head"/>
        <div className="pageWrap">
          <TweetInput className="tweetInput"/>
          <TweetList className="tweetList" tweets={this.state.tweets}/>
          <Aside className="aside" users={this.state.users}/>
        </div>
      </div>
      )
    }
  };


ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="#login" component={Login}/>
      <Route path="#register" component={Register}/>
    </Route>
  </Router>
),document.getElementById('app'));

export default App;
