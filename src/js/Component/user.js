import React from 'react';
import jQuery from 'jquery';


class User extends React.Component {
  render () {
    return (
      <div className="userBox">
        <img src="http://www.brianjahn.com/data/photos/80_1ck_copy.jpg" height= "50px"/>
        <h3 className="userName">{this.props.user.attributes.email}</h3>
      </div>
    )
  }
}

export default User;
