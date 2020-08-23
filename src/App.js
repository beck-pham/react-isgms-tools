import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './components/pages/homepage/Homepage';
import ToolPage from './components/pages/tool/Tool';
import WarrantyTrackerPage from './components/pages/warranty-tracker/Warranty-tracker';
import NetappWarranty from './components/pages/warranty-tracker/netapp/Netapp-warranty';
import IsilonWarranty from './components/pages/warranty-tracker/isilon/Isilon-warranty';
import AvereWarranty from './components/pages/warranty-tracker/avere/Avere-warranty';
import MaprWarranty from './components/pages/warranty-tracker/mapr/Mapr-warranty';
import SilverPeakWarranty from './components/pages/warranty-tracker/silverpeak/Silverpeak-warranty';
import KnowledgeBase from './components/pages/knowledge-base/Knowledge-base';
//import TimeSeries from './components/pages/timeseries/Timeseries';
import Inventory from './components/inventory/Inventory';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tool" component={ToolPage} />
        <Route path="/tool/knowledgebase" component={KnowledgeBase} />
        {/* <Route path="/tool/timeseries" component={TimeSeries} /> */}
        <Route path="/tool/inventory" component={Inventory} />
        <Route
          exact
          path="/tool/warrantytracker"
          component={WarrantyTrackerPage}
        />
        <Route path="/tool/warrantytracker/netapp" component={NetappWarranty} />
        <Route path="/tool/warrantytracker/isilon" component={IsilonWarranty} />
        <Route path="/tool/warrantytracker/avere" component={AvereWarranty} />
        <Route path="/tool/warrantytracker/mapr" component={MaprWarranty} />
        <Route
          path="/tool/warrantytracker/silverpeak"
          component={SilverPeakWarranty}
        />
      </Switch>
    </div>
  );
};

export default App;
