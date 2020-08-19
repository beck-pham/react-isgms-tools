import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './components/pages/homepage/homepage';
import ToolPage from './components/pages/tool/tool';
import NetApp from './components/pages/warranty-tracker/netapp/netapp-warranty';
import WarrantyTrackerPage from './components/pages/warranty-tracker/warranty-tracker';
import { IsilonWarranty } from './components/pages/warranty-tracker/isilon/isilon-warranty';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tool" component={ToolPage} />
        <Route
          exact
          path="/tool/warrantytracker"
          component={WarrantyTrackerPage}
        />
        <Route path="/tool/warrantytracker/netapp" component={NetApp} />
        <Route path="/tool/warrantytracker/isilon" component={IsilonWarranty} />
      </Switch>
    </div>
  );
};

export default App;
