import React from 'react'
import jQuery from 'jquery';

class TweetInput extends React.Component {
  constructor(props) {
    super(props);

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

  render () {
    return (
      <div className="tweetInput">
        <span>User:<a href="#">@</a></span>
        <input className="tweetBox"
              onKeyPress={this.handleKeyPress}
                     ref="task"
              placeholder="Type your message..."/>
      </div>
    )
  }
}

export default TweetInput;
