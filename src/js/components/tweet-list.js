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
    this.saveSend = this.saveSend.bind(this);
  }

  handleSend(event) {
    event.preventDefault();
    console.log(this.refs.msgs.value)
    let body = this.refs.msgs.value
    let tweet = {
        body: body
    }

    if (tweet){
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
      },
      headers: {
        'Authorization': `Bearer ${User.access_token}`
      }
    }

    jQuery.ajax('https://twitterapii.herokuapp.com/tweets', options)
      .then(function(response) {
        console.log(response);
        alert('Sent.')
      });
  }

  componentDidMount() {
    alert('post a message!')
    this.interval = setInterval( () =>
    jQuery.ajax('https://twitterapii.herokuapp.com/tweets.json')
          .then(response => {
            this.setState({
              Loaded: true,
              tweets: response.data
            })
            console.log(this.state.tweets)
          }) , 3000);
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
          <input className="tweetBox"
                      ref="msgs"
                      placeholder="Type your message..."/>
          <button className="sendTweet" onClick={this.handleSend}>Send</button>
        </section>
        {tweets.sort().reverse()}
      </div>

    )
  }
}

export default TweetList;
