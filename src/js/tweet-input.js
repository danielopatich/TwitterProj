import React, { PropTypes } from 'react'

class TweetInput extends React.Component {
  render () {
    return (
      <div className="tweetInput">
        <input type="button" value="Send"></input>
        <input className="tweetBox"></input>
      </div>
    )
  }
}

export default TweetInput;
