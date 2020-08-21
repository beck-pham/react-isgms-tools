import React from 'react';
import MenuItem from '../../menu-item/Menu-item';

import './warranty-tracker.styles.scss';

class WarrantyTrackerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vendors: [
        {
          id: 1,
          name: 'NetApp',
          imageUrl: require('../../img/netapp.jpg'),
          linkUrl: '/netapp'
        },
        {
          id: 2,
          name: 'Isilon',
          imageUrl: require('../../img/isilon.jpg'),
          linkUrl: '/isilon'
        },
        {
          id: 3,
          name: 'Avere',
          imageUrl: require('../../img/avere.jpg'),
          linkUrl: '/avere'
        },
        {
          id: 4,
          name: 'SilverPeak',
          imageUrl: require('../../img/silverpeak.jpg'),
          linkUrl: '/silverpeak'
        },
        {
          id: 5,
          name: 'Mapr',
          imageUrl: require('../../img/mapr.jpg'),
          linkUrl: '/mapr'
        }
      ]
    };
  }

  render() {
    return (
      <div className="warranty-tracker-menu">
        {this.state.vendors.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
        ;
      </div>
    );
  }
}

export default WarrantyTrackerPage;
