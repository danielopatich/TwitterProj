import React from 'react';
import jQuery from 'jquery';
import User from './user';



class Aside extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    let userStuff = this.props.users.map(user => {
      return <User key={user.id}
                   user={user}/>
    });

    return (
      <section className="usersList">
      {userStuff}
      </section>
    )
  }
}

export default Aside;
