import React from 'react';

import './menu-item.styles.scss';

const MenuItemExternal = ({ title, imageUrl, linkUrl }) => {
  const handleClick = (event, url) => {
    event.preventDefault();
    window.open(url);
  };

  return (
    <div className="menu-item" onClick={event => handleClick(event, linkUrl)}>
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
};

export default MenuItemExternal;
