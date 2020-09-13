import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DocumentIcon } from '../../../icon/doc.svg';
import { ReactComponent as BugIcon } from '../../../icon/bug.svg';
import { ReactComponent as SupportIcon } from '../../../icon/support.svg';
import CustomButton from '../../button/Custom-button';
import Title from '../../title/Title';
import NavBar from '../../nav/NavBar';
import Footer from '../../footer/Footer';

import './knowledge-base.styles.scss';

const KnowledgeBase = () => (
  <div>
    <NavBar />
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
        <CustomButton className="search-CustomButton">
          <ion-icon
            style={{ verticalAlign: 'middle' }}
            name="search-outline"
            size="small"
          ></ion-icon>
        </CustomButton>
      </form>
    </div>

    <div className="kb-card">
      <div
        className="feature-container-box"
        style={{ flex: '0 0 25rem', margin: '0 2rem', height: '35rem' }}
      >
        <DocumentIcon height="50" width="50" />
        <h4 className="kb-card-heading">Documentation</h4>
        <p className="kb-card-paragraph">
          Browses through our documentation for bugs and troubleshooting
        </p>
        <Link to="/">
          <CustomButton
            className="btn-custom"
            title="Click Here"
          ></CustomButton>
        </Link>
      </div>

      <div
        className="feature-container-box"
        style={{ flex: '0 0 25rem', margin: '0 2rem', height: '35rem' }}
      >
        <BugIcon height="50" width="50" />
        <h4 className="kb-card-heading">Search a Bug</h4>
        <p className="kb-card-paragraph">
          Search for a known bug or issue or create a new unknown bug
        </p>
        <Link to="/">
          <CustomButton
            className="btn-custom"
            title="Click Here"
          ></CustomButton>
        </Link>
      </div>

      <div
        className="feature-container-box"
        style={{ flex: '0 0 25rem', margin: '0 2rem', height: '35rem' }}
      >
        <SupportIcon height="50" width="50" />
        <h4 className="kb-card-heading">Support team</h4>
        <p className="kb-card-paragraph">
          Connect with us if you have any questions for bugs related
        </p>
        <Link to="/">
          <CustomButton
            className="btn-custom"
            title="Click Here"
          ></CustomButton>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
);

export default KnowledgeBase;
