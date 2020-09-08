import React from 'react';

import './directory-item.styles.scss';

const DirectoryItem = ({ imageUrl, name, title }) => (
  <div className="directory-item">
    {/* <div className="bg-video">
      <video className="bg-video-content" autoPlay muted loop>
        <source src="./img/video.mp4" type="video/mp4" />
        Your browser is not supported!
      </video>
    </div> */}
    <div className="container">
      <div className="container-item">
        <figure className="shape">
          <img
            src={`${imageUrl}`}
            alt="member on the team"
            className="shape-img"
          />
          <figcaption className="shape-caption">
            {name}
            <br />
            {title}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
);

export default DirectoryItem;
