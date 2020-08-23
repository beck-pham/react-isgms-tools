import React from 'react';
import CustomButton from '../button/Custom-button';
//import NavigationButton from '../navigation/Navigation';

import './introduction.styles.scss';

const Introduction = () => {
  // const handleScroll = event => {
  //   if ((event.target.className = 'section-feature')) {
  //     console.log('true');
  //   }
  // };

  return (
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
        <CustomButton title="Discover Our Features"></CustomButton>
      </div>
    </div>
  );
};

export default Introduction;
