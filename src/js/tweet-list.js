import React, { PropTypes } from 'react';
import Tweet from './tweet';

class TweetList extends React.Component {

  constructor(props){
    super(props);
  }



  render () {
    console.log(this.props.tweets)
    let tweets = this.props.tweets.map(tweet => {
      return <Tweet key={tweet.id}
                    tweet={tweet}/>
    })
    return(
      <div>
        {tweets}
      </div>

    )
  }
}

export default TweetList;
