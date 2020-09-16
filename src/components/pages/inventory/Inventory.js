import React from 'react';
import MenuItem from '../../menu-item/Menu-item';
import NavBar from '../../nav/NavBar';
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
        <NavBar />
        <div className="inventory-bg">
          <Title title="Inventory" subtitle="ISGMS Spare Parts Inventory" />
        </div>
        <div>
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
