import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './components/pages/homepage/homepage';
import ToolPage from './components/pages/tool/tool';
import ReactTable from './components/react-table/react-table';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tool" component={ToolPage} />
        <Route path="/table" component={ReactTable} />
      </Switch>
    </div>
  );
};

export default App;
