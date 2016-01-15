import React, { PropTypes } from 'react';
import jQuery from 'jquery';

import setup from '../setup';
import User from '../Mods/users';
import Tweet from './tweet';

class TweetList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Loaded: false,
      tweets:[]
    }
    this.handleSend = this.handleSend.bind(this);
  }

  handleSend(event) {
    event.preventDefault();

    let tweet = {
      tweet: {
        body: this.refs.msgs.value
      }
    }

    if (tweet.tweet) {
      console.log(tweet);
      this.saveSend(tweet);
    } else {
      console.log('There was a problem sending your tweet.')
    }
  };

  saveSend(tweet) {
    let options = {
      type: 'POST',
      data: {
        tweet: tweet
      }
    }

    jQuery.ajax('https://twitterapii.herokuapp.com/tweets', options)
      .then(function(response) {
        console.log(response);
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
                      ref="msgs"
                      placeholder="Type your message..."/>
                    <button className="sendTweet" onClick={this.handleSend}>Submit</button>
        </section>
        {tweets}
      </div>

    )
  }
}

export default TweetList;
