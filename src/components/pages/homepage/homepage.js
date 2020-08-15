import React from 'react';

import Header from '../../header/header';
import About from '../../about/about';
import Feature from '../../feature/feature';
import Directory from '../../directory/directory';
import ToolKit from '../../toolkit/toolkit';
import Footer from '../../footer/footer';

const HomePage = () => (
  <div className="homepage">
    <Header />
    <About />
    <Feature />
    <ToolKit />
    <Directory />
    <Footer />
  </div>
);

export default HomePage;
