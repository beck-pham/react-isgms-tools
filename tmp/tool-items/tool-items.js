import React from 'react';
import { withRouter } from 'react-router-dom'; // withRouter enables to use props such as location,match, and history without using "props-drilling" approach.

import './tool-items.styles.scss';

const ToolItems = ({ title, imageUrl, history, linkUrl, match }) => (
  <div
    className="tool-items"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url${imageUrl}` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SIGN IN</span>
    </div>
  </div>
);

export default withRouter(ToolItems);
