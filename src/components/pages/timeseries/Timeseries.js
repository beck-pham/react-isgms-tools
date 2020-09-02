import React from 'react';

import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import MenuItemExternal from '../../menu-item/Menu-item-external';
import Title from '../../title/Title';

import './timeseries.styles.scss';

class TimeSeries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: 'NKDC',
          imageUrl: require('../../img/datacenter.jpg'),
          linkUrl: 'https://nk11p00im-gfana.storage.me.com/login'
        },
        {
          id: 2,
          title: 'STDC',
          imageUrl: require('../../img/datacenter.jpg'),
          linkUrl: 'https://st11p00im-gfana.storage.me.com/login'
        },
        {
          id: 3,
          title: 'MRDC',
          imageUrl: require('../../img/datacenter.jpg'),
          linkUrl: 'https://mr11p00im-gfana.storage.me.com/login'
        },
        {
          id: 4,
          title: 'PVDC',
          imageUrl: require('../../img/datacenter.jpg'),
          linkUrl: 'https://pv33p00im-gfana.storage.me.com/login'
        },
        {
          id: 5,
          title: 'MSC',
          imageUrl: require('../../img/datacenter.jpg'),
          linkUrl: 'https://ms11p00im-gfana.storage.me.com/login'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="timeseries-bg">
          <Title
            title="Time Series"
            subtitle="Real time monitoring for performance by providing comprehensive level metrics with powerful dashboard"
          />
        </div>

        <div className="timeseries-container">
          {this.state.items.map(({ id, ...otherProps }) => (
            <MenuItemExternal key={id} {...otherProps} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default TimeSeries;
