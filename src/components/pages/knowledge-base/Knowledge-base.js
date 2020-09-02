import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../../title/Title';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

import './knowledge-base.styles.scss';

const KnowledgeBase = () => (
  <div>
    <Header />
    <div className="kb-bg">
      <Title
        title="Knowledge Base"
        subtitle="Search our troubleshooting topic or browse by product caterogy"
      />
      <form action="#" className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search a bug"
        />
        <button className="search-button">
          <ion-icon
            style={{ verticalAlign: 'middle' }}
            name="search-outline"
            size="small"
          ></ion-icon>
        </button>
      </form>
    </div>

    <div className="kb-card">
      <div
        className="feature-container-box"
        style={{ flex: '0 0 25rem', margin: '0 2rem', height: '35rem' }}
      >
        <ion-icon name="logo-buffer"></ion-icon>
        <h4 className="kb-card-heading">Documentation</h4>
        <p className="kb-card-paragraph">
          Browses through our documentation for bugs and troubleshooting
        </p>
        <Link to="/">
          <button className="btn" style={{ backgroundColor: 'black' }}>
            CLICK HERE
          </button>
        </Link>
      </div>

      <div
        className="feature-container-box"
        style={{ flex: '0 0 25rem', margin: '0 2rem', height: '35rem' }}
      >
        <ion-icon name="logo-ionitron"></ion-icon>
        <h4 className="kb-card-heading">Search a Bug</h4>
        <p className="kb-card-paragraph">
          Search for a known bug or issue or create a new unknown bug
        </p>
        <Link to="/">
          <button className="btn" style={{ backgroundColor: 'black' }}>
            CLICK HERE
          </button>
        </Link>
      </div>

      <div
        className="feature-container-box"
        style={{ flex: '0 0 25rem', margin: '0 2rem', height: '35rem' }}
      >
        <ion-icon name="logo-octocat"></ion-icon>
        <h4 className="kb-card-heading">Support team</h4>
        <p className="kb-card-paragraph">
          Connect with us if you have any questions for bugs related
        </p>
        <Link to="/">
          <button className="btn" style={{ backgroundColor: 'black' }}>
            CLICK HERE
          </button>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default KnowledgeBase;
