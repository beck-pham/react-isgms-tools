import React from 'react';
import MenuItem from '../../menu-item/Menu-item';
import Header from '../../header/Header';
import Title from '../../title/Title';
import Footer from '../../footer/Footer';
import MENU_ITEM_DATA from '../../menu-item/menu-item.data';
import './inventory.styles.scss';

class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vendors: MENU_ITEM_DATA
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="inventory-bg">
          <Title
            title="Inventory"
            subtitle="ISGMS Spare Parts Inventory"
            style={{ color: 'white' }}
          />
        </div>
        <div style={{ height: '80vh', paddingTop: '2rem' }}>
          <div className="menu-container">
            {this.state.vendors.map(({ id, ...otherProps }) => (
              <MenuItem key={id} {...otherProps} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Inventory;
