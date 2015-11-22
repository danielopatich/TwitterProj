console.log('hi')

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import jQuery from 'jquery';

import TweetList from './tweet-list.js';
import Aside from './aside';

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
      <TweetList tweets={this.state.tweets}/>
      <Aside users={this.state.users}/>
      </div>
    )
  }
}

export default App;




ReactDOM.render((
  <Router>
    <Route path="/" component={App}/>
    <Route path="dashboard" component={Aside}/>
  </Router>
),document.getElementById('app'));
