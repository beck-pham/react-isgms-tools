import React from 'react';

import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import Title from '../../title/Title';
import MenuItem from '../../menu-item/Menu-item';
import ITicketDashboard from '../../dashboard/iTicketDashboard';
import TicketForm from '../../form/TicketForm';

import './iTicket.styles.scss';

class iTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [
        {
          id: 1,
          title: 'Break-fix Ticket',
          imageUrl: require('../../img/datacenter.jpg'),
          linkUrl: '/break_fix_ticket'
        },
        {
          id: 2,
          title: 'NetApp',
          imageUrl: require('../../img/netapp.jpg'),
          linkUrl: '/netapp'
        },
        {
          id: 3,
          title: 'Isilon',
          imageUrl: require('../../img/isilon.jpg'),
          linkUrl: '/isilon'
        },
        {
          id: 4,
          title: 'Mapr',
          imageUrl: require('../../img/mapr.jpg'),
          linkUrl: '/mapr'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="iTicket-bg">
          <Title
            title="iTicket"
            subtitle="Infrastructure Storage Break-fix Ticketing System Dashboard"
            className="iTicket-bg"
          />
        </div>
        <div className="iTicket-dashboard">
          <ITicketDashboard />
          <div className="iTicket-form">
            <TicketForm />
          </div>
        </div>
        <div className="iTicket-container">
          {this.state.tickets.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default iTicket;
