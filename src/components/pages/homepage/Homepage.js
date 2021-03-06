import React from 'react';

import Header from '../../header/Header';
import Introduction from '../../introduction/Introduction';
import About from '../../about/About';
import Feature from '../../feature/Feature';
import Directory from '../../directory/Directory';
import ToolKit from '../../toolkit/ Toolkit';
import Footer from '../../footer/Footer';

const HomePage = () => (
  <div className="homepage">
    <Header />
    <Introduction />
    <About />
    <Feature />
    <ToolKit />
    <Directory />
    <Footer />
  </div>
);

export default HomePage;
