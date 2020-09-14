import React from 'react';

import './about.styles.scss';

const About = () => (
  <section className="section-about">
    <div style={{ textAlign: 'center', margin: '3rem' }}>
      <h2 className="heading-secondary">Who are we?</h2>
    </div>

    <div className="about-container">
      <div className="heading">
        <h3 className="heading-tertinary " style={{ marginBottom: '1rem' }}>
          Our Mission
        </h3>
        <p className="paragraph">
          Provide the best Storage experience as a Service for iCloud, iCloud
          Mail, WWW, AMP
          <br />
          and SWU as well as the iCloud Lab environment.
        </p>
        <h3 className="heading-tertinary " style={{ marginBottom: '1rem' }}>
          Contact Information
        </h3>
        <p className="paragraph">
          Our team email is : isgms@group.apple.com
          <br />
          Our radar component is: iCloud Mail Storage
          <br />
          Our Central station Assignment Group is : ISG Mail Storage
          <br />
          Our Slack/Jabber chatroom: isgms
        </p>

        {/* <a href="#section-about" className="btn-text">
          Learn more &rarr;
        </a> */}
      </div>

      <div className="composition">
        <img
          src="img/tech1.jpg"
          alt="technology_1"
          className="composition-photo composition-photo--p1"
        />
        <img
          src="img/tech2.jpg"
          alt="technology_2"
          className="composition-photo composition-photo--p2"
        />
        <img
          src="img/tech3.jpg"
          alt="stechnology_3"
          className="composition-photo composition-photo--p3"
        />
      </div>
    </div>
  </section>
);

export default About;
