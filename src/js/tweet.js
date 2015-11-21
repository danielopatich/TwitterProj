import React from 'react'
import moment from 'moment';

class Tweet extends React.Component {

  render () {
    console.log(this.props.tweet.relationships.user.data.id)
    let tweet = this.props.tweet
    let user = this.props.tweet.relationships.user.data.id
    let time = moment(tweet.attributes.created_at).fromNow();
    return(
    <div className="tweet">
      <a href="#" className="userHandle">@{user}</a>
      <span className="tweetTime">tweeted: {time}</span>
      <p className="tweetBody">{tweet.attributes.body}</p>
    </div>
    )
  }
}

export default Tweet;
