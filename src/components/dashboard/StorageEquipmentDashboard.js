import React from 'react';
import DashboardItem from '../dashboard-item/Dashboard-item';
import './dashboard.styles.scss';

class StorageEquipmentDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: 'Total Netapp Filers',
          subtitle: '4% from last month',
          start: 0,
          end: 690,
          duration: 2.75
        },
        {
          id: 2,
          title: 'Total Isilon Systems',
          subtitle: '7% from last month',
          start: 0,
          end: 313,
          duration: 2.75
        },
        {
          id: 3,
          title: 'Total Avere Systems',
          subtitle: '5% from last month',
          start: 0,
          end: 170,
          duration: 2.75
        },
        {
          id: 4,
          title: 'Total Mapr Systems',
          subtitle: '12% from last month',
          start: 0,
          end: 69,
          duration: 2.75
        },
        {
          id: 5,
          title: 'Total MailPods',
          subtitle: '1% from last month',
          start: 0,
          end: 666,
          duration: 2.75
        },
        {
          id: 6,
          title: 'Total Q&A Assets',
          subtitle: '2% from last month',
          start: 0,
          end: 75,
          duration: 2.75
        }
      ]
    };
  }

  render() {
    return (
      <div className="storage-equipment-dashboard" style={{ width: '100%' }}>
        <h3 className="dashboard-heading">
          Production Storage Systems Overview
        </h3>
        <div className="dashboard-container">
          {this.state.items.map(({ id, ...otherProps }) => (
            <DashboardItem key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default StorageEquipmentDashboard;
