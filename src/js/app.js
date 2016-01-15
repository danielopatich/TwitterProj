console.log('Welcome to the twitterz')
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import jQuery from 'jquery';
import _ from 'lodash';
import User from './Mods/users'

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

export default App;

let routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={WelcomeScreen}/>
      <Route path="tweet-list" component={TweetList} />
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
