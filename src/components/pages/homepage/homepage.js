import React from 'react';
import './homepage.styles.scss';

// import NavBar from '../../nav/NavBar';
import Introduction from '../../introduction/Introduction';
import About from '../../about/About';
import Feature from '../../feature/Feature';
import Directory from '../../directory/Directory';
import ToolKit from '../../toolkit/ Toolkit';
import Footer from '../../footer/Footer';

import NavBar from '../../nav/NavBar';

const HomePage = () => (
  <div className="homepage">
    <NavBar />
    <Introduction />
    <ToolKit />
    {/* <About /> */}
    <Feature />
    <About />
    {/* <ToolKit /> */}
    {/* <Feature /> */}
    <Directory />
    <Footer />
  </div>
);

export default HomePage;
