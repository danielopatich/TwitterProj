import React, { PropTypes } from 'react'

class Tweet extends React.Component {

  render () {
    console.log(this.props.tweet.relationships.user.data.id)
    let tweet = this.props.tweet
    let user = this.props.tweet.relationships.user.data.id
    return(
    <div>
      <h1>{tweet.attributes.body}</h1>
      <p>{tweet.attributes.created_at}</p>
      <h2>tweeted by -* {user} *-</h2>
    </div>
    )
  }
}

export default Tweet;
