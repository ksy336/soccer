import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../sass/App.scss';

function Header() {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <div className="header__logo">
          <span className="header__hamburger hamburger">
            <span className="hamburger__line" />
          </span>
          <Link to="./../../public/images/soccer.svg" className="logo">
            <img src={require('../../public/images/soccer.svg')} alt="logo" width="160px" />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
export default Header;
