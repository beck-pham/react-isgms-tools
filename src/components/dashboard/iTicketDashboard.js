import React from 'react';
import DashboardItem from '../dashboard-item/Dashboard-item';

import './dashboard.styles.scss';

class ITicketDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: 'Total Non-Disk Tickets',
          subtitle: '4% from last week',
          end: 895,
          duration: 2.75
        },
        {
          id: 2,
          title: 'Total NetApp Failed Disks',
          subtitle: '7% from last week',
          end: 557,
          duration: 2.75
        },
        {
          id: 3,
          title: 'Total Isilon Failed Disks',
          subtitle: '5% from last week',
          end: 461,
          duration: 2.75
        },
        {
          id: 4,
          title: 'Total Mapr Failed Disks',
          subtitle: '12% from last week',
          end: 317,
          duration: 2.75
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h3 className="iticket-heading">August Break-fix Tickets</h3>
        <div className="dashboard-container">
          {this.state.items.map(({ id, ...otherProps }) => (
            <DashboardItem key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default ITicketDashboard;