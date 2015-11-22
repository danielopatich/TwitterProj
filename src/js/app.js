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
            console.log(this.state.tweets)
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
      <div className="bodyWrapper">
        <Header className="head"/>
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
      <Route path="/tweet-list"componet={TweetList}/>
    </Route>

  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
