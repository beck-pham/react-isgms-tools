import React from 'react';

import './member-item.styles.scss';

const MemberItem = ({ imageUrl, name, title }) => (
  <div className="member-item">
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
            alt="Member on the team"
            className="shape-img"
          />
          <figcaption className="shape-caption">
            {name.toUpperCase()}
          </figcaption>
          <figcaption className="shape-caption">
            {title.toUpperCase()}
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
);

export default MemberItem;
