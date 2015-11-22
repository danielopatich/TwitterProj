import React from 'react';
import jQuery from 'jquery';
import Tweet from './tweet';

class Dashboard  extends React.Component {
  render () {
    let dunkels = this.props.users.map(useMe => {
      let url = `/#/users/${useMe.id}`;
      return (
        <section className="dashboardContent">
          <h1 class="yourUserName">{useMe.attributes.email}</h1>
          <Tweet key={useMe.id} tweet={useMe.attributes.body}/>
        </section>
      )
    })
    return (
      <div>
        {dunkels}
      </div>
    )
  }
}

export default Dashboard;
