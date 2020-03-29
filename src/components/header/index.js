import React from 'react';

import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <nav className="navigation-menu">
      <div className="container">
        <img src={logo} alt="Logotipo Demo SHOP" />
        <ul>
          <li><a href="#item">Item 1</a></li>
          <li><a href="#item">Item 2</a></li>
          <li><a href="#item">Item 3</a></li>
          <li><a href="#item">Item 4</a></li>
          <li><a href="#item">Item 5</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;