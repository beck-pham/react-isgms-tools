import React from 'react';
import DashboardItem from '../dashboard-item/Dashboard-item';

import './dashboard.styles.scss';

class SystemInfoDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: 'Total Users',
          subtitle: '34% from last month',
          end: 2.5,
          duration: 2.75,
          separator: '" "',
          decimals: 1,
          decimal: ',',
          suffix: 'M'
        },
        {
          id: 2,
          title: 'Total Filers',
          subtitle: '7% from last month',
          end: 690,
          duration: 2.75
        },
        {
          id: 3,
          title: 'Total Disks Used',
          subtitle: '15% from last month',
          end: 199158,
          duration: 2.75
        },
        {
          id: 4,
          title: 'Total Aggr Capacity',
          subtitle: '6% from last month',
          end: 83.84,
          duration: 2.75,
          separator: '" "',
          decimals: 2,
          decimal: ',',
          suffix: ' PB'
        },
        {
          id: 5,
          title: 'Total Aggr Used',
          subtitle: '12% from last month',
          end: 63.01,
          duration: 2.75,
          separator: '" "',
          decimals: 2,
          decimal: ',',
          suffix: ' PB'
        },
        {
          id: 6,
          title: 'Total Aggr Available',
          subtitle: '9% from last month',
          end: 20.47,
          duration: 2.75,
          separator: '" "',
          decimals: 2,
          decimal: ',',
          suffix: ' PB'
        }
      ]
    };
  }

  render() {
    return (
      <div className="storage-equipment-dashboard" style={{ width: '100%' }}>
        <h3 className="dashboard-heading">Data Information Metric Overview</h3>
        <div className="dashboard-container">
          {this.state.items.map(({ id, ...otherProps }) => (
            <DashboardItem key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default SystemInfoDashboard;
