import React from 'react';

import './introduction.styles.scss';

const Introduction = () => {
  return (
    <div className="intro">
      <div className="intro-text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">
            Infrastructure Services Storage Team
          </span>
          <span className="heading-primary-sub">
            storage as a Service for Apple Infrastructure
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Introduction;
