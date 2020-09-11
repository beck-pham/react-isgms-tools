import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import HomePage from './components/pages/homepage/Homepage';
import ToolPage from './components/pages/tool/Tool';
import KnowledgeBase from './components/pages/knowledge-base/Knowledge-base';
import SystemInfo from './components/pages/system-info/System-info';
import TimeSeries from './components/pages/timeseries/Timeseries';
import iTicket from './components/pages/iTicket/Iticket';
import BreakfixTicket from './components/break-fix/Break-fix';

/**** WARRANTY PAGE ****/
import StorageEquipmentPage from './components/pages/storage-equipment/Storage-equipment';
import NetappEquipment from './components/pages/storage-equipment/netapp/Netapp-equipment';
import IsilonEquipment from './components/pages/storage-equipment/isilon/Isilon-equipment';
import AvereEquipment from './components/pages/storage-equipment/avere/Avere-equipment';
import MaprEquipment from './components/pages/storage-equipment/mapr/Mapr-equipment';
import SilverPeakEquipment from './components/pages/storage-equipment/silverpeak/Silverpeak-equipment';

/**** INVENTORTY PAGE ****/
import Inventory from './components/pages/inventory/Inventory';
import NetappInventory from './components/pages/inventory/netapp-inventory/Netapp-inventory';
import IsilonInventory from './components/pages/inventory/isilon-inventory/Isilon-inventory';
import NavBar from './components/nav/NavBar';
//import TimeSeries from './components/pages/timeseries/Timeseries';

const App = () => {
  return (
    <Switch>
      {/* */}
      {/* <Route exact path="/test" component={iTicketForm} /> */}
      <Route exact path="/test" component={NavBar} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/tool" name="tool" component={ToolPage} />
      <Route path="/tool/system_info" component={SystemInfo} />
      <Route path="/tool/knowledge_base" component={KnowledgeBase} />
      <Route path="/tool/time_series" component={TimeSeries} />
      <Route path="/tool/iticket" component={iTicket} />
      {/* NEED TO FIX PATH */}
      <Route path="/temp" component={BreakfixTicket} />
      <Route exact path="/tool/inventory" component={Inventory} />
      <Route path="/tool/inventory/netapp" component={NetappInventory} />
      <Route path="/tool/inventory/isilon" component={IsilonInventory} />
      <Route
        exact
        path="/tool/storage_equipment"
        component={StorageEquipmentPage}
      />
      <Route
        path="/tool/storage_equipment/netapp"
        component={NetappEquipment}
      />
      <Route
        path="/tool/storage_equipment/isilon"
        component={IsilonEquipment}
      />
      <Route path="/tool/storage_equipment/avere" component={AvereEquipment} />
      <Route path="/tool/storage_equipment/mapr" component={MaprEquipment} />
      <Route
        path="/tool/storage_equipment/silverpeak"
        component={SilverPeakEquipment}
      />
    </Switch>
  );
};

export default App;
