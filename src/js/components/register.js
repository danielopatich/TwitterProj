import React from 'react';

import setup from '../setup';
import User from '../Mods/users';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(event) {
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;

    if (email && password && confirmPassword) {
      console.log (email, password, confirmPassword)
      User.register({
        email: email,
        password: password,
      }, (error, data) => {
        if (!error) {
          setup(User.access_token);
          console.log('success')
          alert('Now login to tweet!');
        } else {
          alert('error in register');
        }
      });
    } else {
      alert('Password or user name is wrong');
    }
  }

  render () {
    return (
      <div className="register">
        <h1>Register 4 us!</h1>
        <form className="form">
        <input ref="email" type="text" className="email" placeholder="Email..."></input>
        <input ref="password" type="password" className="password" placeholder="Password:"></input>
        <input ref="confirmPassword" type="password" className="confPassword" placeholder="Conf Password"></input>
        <button className="joinBtn" value="Join" onClick={this.handleRegister}>register</button>
        <span>Or...<a href="/#/login">Login Here</a></span>
        </form>
      </div>
    )
  }
}

export default Register;
