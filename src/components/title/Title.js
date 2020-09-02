import React from 'react';

import './title.styles.scss';

const Title = ({ title, subtitle }) => (
  <div className="main-title">
    <h2 style={{ paddingBottom: '2rem' }}>
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </h2>
  </div>
);

export default Title;
