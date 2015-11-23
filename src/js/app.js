console.log('Welcome to the twitterz')

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import jQuery from 'jquery';
import _ from 'lodash';

import Header from './components/header'
import TweetList from './components/tweet-list'
import Aside from './components/aside'
import TweetInput from './components/tweet-input'
import Login from './components/login'
import Register from './components/register'
import Dashboard from './components/dashboard'


class App extends React.Component {
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
    jQuery.ajax('https://twitterapii.herokuapp.com/users.json')
      .then(response => {
        this.setState({
          users: response.data
        })
      });
  }


  render () {
    return(
      <div className="pageWrap">
        <Header className="head"/>
        <Aside className="aside" users={this.state.users}/>
        <main>
          {this.props.children}
        </main>
      </div>
      )
    }
  }

export default App;

let routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/tweet-list"component={TweetList}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
