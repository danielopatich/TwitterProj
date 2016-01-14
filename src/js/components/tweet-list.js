import React, { PropTypes } from 'react';
import jQuery from 'jquery';

import Tweet from './tweet';

class TweetList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Loaded: false,
      tweets:[]
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    let key = event.which;
    let ENTER_KEY = 13;

    if (key === ENTER_KEY) {
      let tweet = this.refs.body.value;
      this.saveTweet(tweet);
      this.refs.tweet.value ='';
    }
  }

  saveTweet() {
    let options = {
      type: 'POST',
      data: {
        body: tweet,
        completed: false
      }
    };
    jQuery.ajax('https://twitterapii.herokuapp.com/tweets', options)
      .then(function(response) {
        this.props.handleTweetInput(response);
      });
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
  }


  render () {
    console.log("tweet list rendered")
    console.log(this.state.tweets)
    let tweets = this.state.tweets.map(tweet => {
      return <Tweet key={tweet.id}
                    tweet={tweet}/>
    })
    return(
      <div className="tweet-list">
        <section className="tweetSubmit">
          <span>User:<a href="#">@</a></span>
          <input className="tweetBox"
                onKeyPress={this.handleKeyPress}
                      ref="task"
                      placeholder="Type your message..."/>
        </section>
        {tweets}
      </div>

    )
  }
}

export default TweetList;
