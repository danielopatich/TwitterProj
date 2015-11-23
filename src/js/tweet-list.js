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
        {tweets}
      </div>

    )
  }
}

export default TweetList;
