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
import MaprPieChart from '../../pie-chart/Mapr-pie-chart';
import StorageEquipmentDashboard from '../../dashboard/StorageEquipmentDashboard';
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
            title="Storage Equipment"
            subtitle="Storage Assets Managed by Infrastructure Services Storage Team"
          />
        </div>
        <div
          style={{
            padding: '3rem',
            backgroundColor: 'rgba(236,239, 241, 0.7)'
          }}
        >
          <StorageEquipmentDashboard />;
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
          <div className="pie6">
            <MaprPieChart />
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
