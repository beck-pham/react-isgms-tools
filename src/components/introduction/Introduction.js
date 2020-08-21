import React from 'react';
//import CustomButton from '../button/custom-button';
//import NavigationButton from '../navigation/Navigation';

import './introduction.styles.scss';

const Introduction = () => (
  <div className="intro">
    <div className="intro-logo-box">
      <img src="/img/logo-white.png" alt="Logo" className="intro-logo" />
    </div>
    <div className="intro-text-box">
      <h1 className="heading-primary">
        <span className="heading-primary-main">
          Infrastructure Services Group Storage
        </span>
        <span className="heading-primary-sub">
          storage as a Service for iCloud Infrastructure
        </span>
      </h1>
    </div>
  </div>
);

export default Introduction;
