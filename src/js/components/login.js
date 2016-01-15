import React from 'react';

import setup from '../setup';
import User from '../Mods/users';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    if (email && password) {
      User.login({
        username: email,
        password: password
      }, (error, data) => {
        if (!error) {
          setup(User.access_token);
          console.log('success')
          this.props.history.pushState(null,'/tweet-list');
        } else {
          alert('error in login');
        }
      });
    } else {
      alert('Password or user name is wrong');
    }
  }


  render () {
    return (
      <div className="login">
        <h1>Login</h1>
        <input ref="email" type="text" className="email" placeholder="Email..."></input>
        <input ref="password" type="password" className="password" placeholder="Password:"></input>
        <button className="loginBtn" value="Login" onClick={this.handleLogin}></button>
        <span>Or...<a href="/#/login">Register Here</a></span>
      </div>
    )
  }
}

export default Login;
