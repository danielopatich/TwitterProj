console.log('Welcome to the twitterz')

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import jQuery from 'jquery';

import Header from './header.js'
import TweetInput from './tweet-input'
import TweetList from './tweet-list.js'
import Login from './login.js'
import Register from './register.js'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      Loaded: false,
      tweets:[]
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
  }

  render () {
    return(
      <div className="body">
        <Header className="head"/>
        <TweetInput className="tweetInput"/>
        <TweetList className="tweetList" tweets={this.state.tweets}/>
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
    </Route>
  </Router>
),document.getElementById('app'));
