console.log('hi')

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import jQuery from 'jquery';

import TweetList from './tweet-list.js'
import Header from './header.js'

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
        <Header/>
        <TweetList tweets={this.state.tweets}/>
      </div>
    )
  }
}

export default App;




ReactDOM.render((
  <Router>
    <Route path="/" component={App}/>
  </Router>
),document.getElementById('app'));
