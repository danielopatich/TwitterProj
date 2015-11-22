import React from 'react'

class Register extends React.Component {
  render () {
    return (
      <div className="register">
        <h1>Register 4 us!</h1>
        <input type="text" className="email" placeholder="Email..."></input>
        <input type="password" className="password" placeholder="Password:"></input>
        <input type="password" className="confPassword" placeholder="Conf Password"></input>
        <button className="joinBtn" value="Join"></button>
        <span>Or...<a href="#">Login Here</a></span>
      </div>
    )
  }
}

export default Register;
