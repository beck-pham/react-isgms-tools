import React from 'react';
import DashboardItem from '../dashboard-item/Dashboard-item';
import DashboardModal from '../button/modal/DashboardModal';
import './dashboard.styles.scss';

class ITicketDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: 'Total Non-Disk Tickets',
          subtitle: '4% from last month',
          end: 333,
          duration: 2.75
        },
        {
          id: 2,
          title: 'Total NetApp Failed Disks',
          subtitle: '7% from last month',
          end: 2828,
          duration: 2.75
        },
        {
          id: 3,
          title: 'Total Isilon Failed Disks',
          subtitle: '5% from last month',
          end: 254,
          duration: 2.75
        },
        {
          id: 4,
          title: 'Total Mapr Failed Disks',
          subtitle: '12% from last month',
          end: 147,
          duration: 2.75
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h3 className="iticket-heading">
          Break-fix Tickets for The Last 6 months
        </h3>
        <div className="dashboard-container">
          {this.state.items.map(({ id, ...otherProps }) => (
            <DashboardItem key={id} {...otherProps} />
          ))}
        </div>
        <DashboardModal />
      </div>
    );
  }
}

export default ITicketDashboard;
