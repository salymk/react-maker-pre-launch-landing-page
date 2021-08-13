import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => (
  <header>
    <h1>
      <img src={Logo} alt="Cyan circle with maker text" aria-hidden="true" />
    </h1>
  </header>
);

export default Header;
