console.log('Welcome to the twitterz')

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import jQuery from 'jquery';
import _ from 'lodash';

import TweetList from './component/tweet-list';
import Aside from './component/aside';
import Header from './component/header'
import TweetInput from './component/tweet-input'
import Login from './component/login'
import Register from './component/register';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      <Route path="tweet-list" component={TweetList}/>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
