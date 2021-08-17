import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => (
  <header>
    <img src={Logo} alt="Cyan circle with maker text" aria-hidden="true" />
  </header>
);

export default Header;
