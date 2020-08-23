import React from 'react';

import './footer.styles.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo-box">
      <img src="/img/logo-footer.png" alt="Full logo" className="footer-logo" />
    </div>

    <div className="footer-container">
      <div className="footer-heading">
        <h3>stay connected</h3>
        <p
          style={{
            paddingTop: '2rem',
            textTransform: 'capitalize',
            letterSpacing: '1px'
          }}
        >
          {' '}
          Ask us for help through channels
        </p>
        <ul className="footer-list">
          <li className="footer-item">
            <a
              href="https://radar.apple.com"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-slack" color="white" size="small"></ion-icon>
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://app.slack.com/client/TEJ6NBG84/CHAG4R058"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-ionic" color="white" size="small"></ion-icon>
            </a>
          </li>
          <li className="footer-item">
            <a href="mailto:beck_pham@apple.com" className="footer-link">
              <ion-icon
                name="mail-outline"
                color="white"
                size="small"
              ></ion-icon>
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://istweb.apple.com/apple-chat"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon
                name="chatbubbles-outline"
                color="white"
                size="small"
              ></ion-icon>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="footer-copyright">
          <a href="mailto:beck_pham@apple.com">Feedback or Questions?</a> |{' '}
          <a href="mailto:vic_le@apple.com">Report an Issue</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
