import React from 'react';
import Header from './components/header/Header';
import About from './components/about/about';
import Feature from './components/feature/Feature';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Feature />
      </div>
    );
  }
}

export default App;
