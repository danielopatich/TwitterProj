import React from 'react';
import User from '../mods/users';

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.loginUser = this.loginUser.bind(this)
  }

  loginUser(){
    let email = this.refs.email.value
    let password = this.refs.password.value

    console.log(email, password, "dis info")
    User.login({
      username: email,
      password: password
    })
    console.log("went to server")

  }

  render () {
    return (
      <div className="login">
        <h1>Login</h1>
        <input ref="email"type="text "className="email" placeholder="Email..."></input>
        <input ref="password" type="password" className="password" placeholder="Password:"></input>
        <button className="loginBtn" value="Login" onClick={this.loginUser}></button>
        <span>Or...<a href="/#/login">Register Here</a></span>
      </div>
    )
  }
}

export default Login;
