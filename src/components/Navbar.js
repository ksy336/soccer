import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/App.css';

function Navbar() {
  return (
    <nav className="header__navigation">
      <ul className="navigation">
        <li className="navigation__link">
          <Link to="/" className="navigation__anchor anchor__active">
            Лиги
          </Link>
        </li>
        <li className="navigation__link">
          <Link to="/teams" className="navigation__anchor">
            Команды
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
