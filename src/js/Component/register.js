import React from 'react'
import User from '../mods/users'

class Register extends React.Component {

  constructor(props){
    super(props);
    this.registerUser = this.registerUser.bind(this)
  }

  registerUser(e){
    e.preventDefault()
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;


    if (!email || !password || password !== confirmPassword){
      console.log(email, password, confirmPassword)
      alert("fix your life")
    } else {
      User.register({
      email: email,
      password: password,
      confirmPassword: confirmPassword
    })
   }
  }

  render () {
    return (
      <div className="register">
        <h1>Register 4 us!</h1>
        <input ref="email"type="text" className="email" placeholder="Email..."></input>
        <input ref="password"type="password" className="password" placeholder="Password:"></input>
        <input ref="confirmPassword"type="password" className="confPassword" placeholder="Conf Password"></input>
        <button className="joinBtn" value="Join" onClick={this.registerUser}></button>
        <span>Or...<a href="/#/login">Login Here</a></span>
      </div>
    )
  }
}

export default Register;
