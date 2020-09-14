import React from 'react';
import MenuItem from '../../menu-item/Menu-item';
import NavBar from '../../nav/NavBar';
import Title from '../../title/Title';
import Footer from '../../footer/Footer';
import PieChartByDC from '../../pie-chart/Netapp-pie-chart/PieChartByDC';
import PieChartByBU from '../../pie-chart/Netapp-pie-chart/PieChartByBU';
import PieChartByModel from '../../pie-chart/Netapp-pie-chart/PieChartByModel';
import MENU_ITEM_DATA from '../../menu-item/menu-item.data';

import './storage-equipment.styles.scss';
import IsilonPieChart from '../../pie-chart/Isilon-pie-chart';
import AverePieChart from '../../pie-chart/Avere-pie-chart';
class StorageEquipmentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vendors: MENU_ITEM_DATA
    };
  }

  render() {
    return (
      <div style={{ paddingBottom: '2rem' }}>
        <NavBar />
        <div className="storage-equipment-bg">
          <Title
            title="Storage Assets"
            subtitle="Storages Managed by Infrastructure Services Storage Team"
          />
        </div>
        <div className="pie-chart-container">
          <div className="pie1">
            <PieChartByBU />
          </div>
          <div className="pie2">
            <PieChartByDC />
          </div>
          <div className="pie3">
            <PieChartByModel />
          </div>
          <div className="pie4">
            <IsilonPieChart />
          </div>
          <div className="pie5">
            <AverePieChart />
          </div>
        </div>

        <div className="storage-equipment-menu">
          {this.state.vendors.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ))}
          ;
        </div>
        <Footer />
      </div>
    );
  }
}

export default StorageEquipmentPage;
