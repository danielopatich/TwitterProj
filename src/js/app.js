console.log('Welcome to the twitterz')

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import jQuery from 'jquery';
import _ from 'lodash';

import Header from './header'
import TweetInput from './tweet-input'
import TweetList from './tweet-list'
import Login from './login'
import Register from './register'
import Aside from './aside'
import Dashboard from './dashboard'


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
