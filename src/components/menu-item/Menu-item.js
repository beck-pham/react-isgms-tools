import React from 'react';
import { withRouter } from 'react-router-dom'; // withRouter enables to use props such as location,match, and history without using "props-drilling" approach.

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <div
    className="menu-item"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Sign In</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
