import React, { PropTypes } from 'react';
import jQuery from 'jquery';

import Tweet from './tweet';

class TweetList extends React.Component {
  constructor(props){
    super(props);

  }

  render () {
    console.log("tweet list rendered")
    console.log(this.props.tweets)
    let tweets = this.props.tweets.map(tweet => {
      return <Tweet key={tweet.id}
                    tweet={tweet}/>
    })
    return(
      <div className="tweet-list">
        {tweets}
      </div>

    )
  }
}

export default TweetList;
