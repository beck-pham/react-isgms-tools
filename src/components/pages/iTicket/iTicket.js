import React from 'react';

import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import Title from '../../title/Title';
import MenuItem from '../../menu-item/Menu-item';
import ITicketDashboard from '../../dashboard/iTicketDashboard';

import './iTicket.styles.scss';
import MENU_ITEM_DATA from '../../menu-item/menu-item.data';

class iTicket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: MENU_ITEM_DATA
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
          />
        </div>
        <ITicketDashboard />
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
