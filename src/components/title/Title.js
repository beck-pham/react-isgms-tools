import React from 'react';

import './title.styles.scss';

const Title = ({ title, subtitle }) => (
  <div className="main-title">
    <h2 style={{ paddingBottom: '2rem' }}>
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </h2>
    <form action="#" className="search">
      <input type="text" className="search-input" placeholder="Search a bug" />
      <button className="search-button">
        <ion-icon
          style={{ verticalAlign: 'middle' }}
          name="search-outline"
          size="small"
        ></ion-icon>
      </button>
    </form>
  </div>
);

export default Title;
