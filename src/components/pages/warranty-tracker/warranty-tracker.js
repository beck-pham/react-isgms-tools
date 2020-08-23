import React from 'react';
import MenuItem from '../../menu-item/Menu-item';
import Header from '../../header/Header';
import Title from '../../title/Title';
import Footer from '../../footer/Footer';
import MENU_ITEM_DATA from '../../menu-item/menu-item.data';
import './warranty-tracker.styles.scss';

class WarrantyTrackerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vendors: MENU_ITEM_DATA
    };
  }

  render() {
    return (
      <div style={{ paddingBottom: '2rem' }}>
        <Header />
        <div className="warranty-bg">
          <Title
            title="Warranty Tracker"
            subtitle="Database for system warranty information"
          />
        </div>

        <div className="warranty-tracker-menu">
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

export default WarrantyTrackerPage;
