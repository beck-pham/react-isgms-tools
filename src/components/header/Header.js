import React from 'react';
//import CustomButton from '../button/custom-button';
import NavigationButton from '../navigation/navigation';

import './header.styles.scss';

const Header = () => (
  <header className="header">
    <div className="header__logo-box">
      <img src="/img/logo-white.png" alt="Logo" className="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary-main">
          Infrastructure Services Group Storage
        </span>
        <span className="heading-primary-sub">
          storage as a Service for iCloud Infrastructure
        </span>
      </h1>
    </div>
    <NavigationButton />
  </header>
);

export default Header;
