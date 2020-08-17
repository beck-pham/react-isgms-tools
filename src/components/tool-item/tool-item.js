import React from 'react';
import { withRouter } from 'react-router-dom'; // withRouter enables to use props such as location,match, and history without using "props-drilling" approach.

import './tool-item.styles.scss';

const ToolItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <div
    className="tool-item"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Sign In</span>
    </div>
  </div>
);

export default withRouter(ToolItem);
