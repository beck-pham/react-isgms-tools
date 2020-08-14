import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Feature from './components/feature/feature';
import Directory from './components/directory/directory';
import ToolItems from './components/tool-item/tool-item';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Feature />
        <ToolItems />
        <Directory />
      </div>
    );
  }
}

export default App;
