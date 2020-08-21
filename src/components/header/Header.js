import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div>
    <header className="header">
      <ion-icon name="reader-outline" size="large"></ion-icon>
      <nav className="header-nav">
        <li className="header-nav-li">
          <NavLink exact to="/" className="header-nav-link">
            Home
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink to="/about" className="header-nav-link">
            File a Bug
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink to="/teachers" className="header-nav-link">
            Browse
          </NavLink>
        </li>
        <li className="header-nav-li">
          <NavLink to="/courses" className="header-nav-link">
            Search
          </NavLink>
        </li>
      </nav>
    </header>
  </div>
);

export default Header;
