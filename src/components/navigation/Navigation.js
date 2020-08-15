import React from 'react';

import './navigation.styles.scss';

const NavigationButton = () => (
  <div className="navigation">
    <input type="checkbox" className="navigation-checkbox" id="navi-toggle" />

    <label className="navigation-button">
      <span className="navigation-icon">&nbsp;</span>
    </label>

    <div className="navigation-background">&nbsp;</div>

    <nav className="navigation-nav">
      <ul className="navigation-list">
        <li className="navigation-item">
          <a href="#section-about" className="nagivation-link">
            About
          </a>
        </li>
        <li className="navigation-item">
          <a href="#section-features" className="nagivation-link">
            Features
          </a>
        </li>
        <li className="navigation-item">
          <a href="#section-tools" className="nagivation-link">
            Tools
          </a>
        </li>
        <li className="navigation-item">
          <a href="#section-team" className="nagivation-link">
            Team directorys
          </a>
        </li>
        <li className="navigation-item">
          <a href="#section-connect" className="nagivation-link">
            Connect
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavigationButton;
