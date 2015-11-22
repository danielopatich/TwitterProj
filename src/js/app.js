console.log('Welcome to the twitterz')

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import jQuery from 'jquery';

<<<<<<< HEAD
import TweetList from './tweet-list.js';
import Aside from './aside';
=======
import Header from './header.js'
import TweetInput from './tweet-input'
import TweetList from './tweet-list.js'
import Login from './login.js'
import Register from './register.js'
>>>>>>> 337a6eb4655924e5d7f2fcd51dfad52fd94a932a

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
<<<<<<< HEAD
      <div>
      <TweetList tweets={this.state.tweets}/>
      <Aside users={this.state.users}/>
=======
      <div className="body">
        <Header className="head"/>
        <div className="pageWrap">
          <TweetInput className="tweetInput"/>
          <TweetList className="tweetList" tweets={this.state.tweets}/>
        </div>
>>>>>>> 337a6eb4655924e5d7f2fcd51dfad52fd94a932a
      </div>
    )
  }
}


export default App;


<<<<<<< HEAD


ReactDOM.render((
  <Router>
    <Route path="/" component={App}/>
=======
ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="#login" component={Login}/>
      <Route path="#register" component={Register}/>
    </Route>
>>>>>>> 337a6eb4655924e5d7f2fcd51dfad52fd94a932a
  </Router>
),document.getElementById('app'));
