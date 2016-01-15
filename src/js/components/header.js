import React from 'react'

class Header extends React.Component {

  render () {
    return(
      <header className="head">
        <nav>
          <ul className="ulNav">
            <li className ="navHome"><a href="/"><span className="icon-home"></span>Home</a></li>
            <li className ="navLogin"><a href="/#/login"><span className="icon-login"></span>Login</a></li>
            <li className ="navRegister"><a href="/#/register"><span className="icon-register"></span>Register</a></li>
            <li className ="navProfile"><a href="/#/tweet-list"><span className="icon-profile"></span>Tweet List</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;
