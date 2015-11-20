import React, { PropTypes } from 'react'

class Header extends React.Component {
  render () {
    return(
      <header>
        <nav>
          <ul>
            <li><a href="/"><span className="icon-home"></span>Home</a></li>
            <li><a href="/login"><span className="icon-login"></span>Login</a></li>
            <li><a href="/register"><span className="icon-register"></span>Register</a></li>
            <li><a href="#profile"><span className="icon-profile"></span>Profile</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
