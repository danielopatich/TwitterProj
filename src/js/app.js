console.log('Welcome to the twitterz')

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import jQuery from 'jquery';


import Header from './header'
import TweetInput from './tweet-input'
import TweetList from './tweet-list'
import Login from './login'
import Register from './register'
import Aside from './aside'
import Dashboard from './dashboard'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      Loaded: false,
      tweets:[],
      users: []
    }
  }



  componentDidMount() {
    jQuery.ajax('https://twitterapii.herokuapp.com/tweets.json')
          .then(response => {

            this.setState({
              Loaded: true,
              tweets: response.data
            })
          });

    jQuery.ajax('https://twitterapii.herokuapp.com/users.json')
          .then(response => {
            this.setState({
              users: response.data
            })
          });


  }

  render () {
    return(
    <div>
      <div className="body">
        <Header className="head"/>
        <div className="pageWrap">
          <TweetInput className="tweetInput"/>
          <TweetList className="tweetList" tweets={this.state.tweets}/>
          <Aside users={this.state.users}/>
          <Dashboard users={this.state.users}/>
        </div>
      </div>
    </div>
    )
  }
}


export default App;






ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="#login" component={Login}/>
      <Route path="#register" component={Register}/>
      <Route path="/users/:id" component={Dashboard}/>
    </Route>

  </Router>
),document.getElementById('app'));
