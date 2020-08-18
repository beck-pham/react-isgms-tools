import React from 'react';

import './warranty-tracker.styles.scss';

class WarrantyTrackerPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vendors: [
        {
          id: 1,
          name: 'NetApp',
          imageUrl: require('../../img/netapp.png'),
          linkUrl: '/tool/warrantytracker/netapp'
        },
        {
          id: 2,
          name: 'Isilon',
          imageUrl: require('../../img/isilon.png'),
          linkUrl: '/tool/warrantytracker/isilon'
        },
        {
          id: 3,
          name: 'Avere',
          imageUrl: require('../../img/avere.png'),
          linkUrl: '/tool/warrantytracker/avere'
        },
        {
          id: 4,
          name: 'SilverPeak',
          imageUrl: require('../../img/silverpeak.png'),
          linkUrl: '/tool/warrantytracker/silverpeak'
        },
        {
          id: 5,
          name: 'Mapr',
          imageUrl: require('../../img/mapr.png'),
          linkUrl: '/tool/warrantytracker/mapr'
        }
      ]
    };
  }
}

export default WarrantyTrackerPage;
